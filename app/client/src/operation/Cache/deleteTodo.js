
import { gql, useMutation } from "@apollo/client";
import _ from 'lodash/fp'
import {GET_ALL_TODOS} from "../queries/getAllTodos";

export const DELETE_TODO = gql`
    mutation DeleteTodo ($id: Int!,) {
        deleteTodo (id: $id) {
            success
            todo {
                id
            }
        }
    }
`

export function useDeleteTodo () {
    const [mutate, { data, error }] = useMutation(
        DELETE_TODO,  {
            update (cache, {data},{variables}) {
                const {id,userId} = (variables)
                const allTodos = _.get('todos')(cache.readQuery({query:GET_ALL_TODOS,  variables:{userId:variables.userId}}))
                cache.writeQuery({
                    query: GET_ALL_TODOS,
                    data: {
                        todos: allTodos.filter((t) => t?.id !== id)
                    },
                    variables:{userId:userId}
                });

                cache.evict({ id: `Todo:${id}`})
            }
        }
    )

    return { mutate, data, error };
}