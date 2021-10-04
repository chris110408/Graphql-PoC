import { gql, useMutation } from "@apollo/client";
import _ from "lodash/fp";
import {GET_ALL_TODOS} from "../queries/getAllTodos";

export const EDIT_TODO = gql`
    mutation EditTodo ($id: Int!, $text: String!) {
        editTodo (id: $id, text: $text) {
            success
            todo {
                id
            }
        }
    }
`

export function useEditTodo () {
    const [mutate, { data, error }] = useMutation(
        EDIT_TODO, { update (cache, {data},{context,variables} ) {

                const {id,text:newtext} = variables
                const CacheId = cache.identify({id: id, __typename: 'Todo'})

                cache.modify({
                    id:CacheId,
                    fields: {
                        text() {
                            return newtext
                        }
                    }

                })
            }
    }
    )

    return { mutate, data, error };
}