import { gql, useMutation, Reference } from "@apollo/client";
import  _ from 'lodash/fp'
import { GET_ALL_TODOS} from '../queries/getAllTodos'

export const ADD_TODO = gql`
    mutation AddTodo ($text: String!,$userId:Int!) {
        addTodo (text: $text,userId:$userId) {
            id
        }
    }
`

export function useAddTodo () {
    const [mutate, { data, error }] = useMutation(
        ADD_TODO,{

            update (cache, {data},{context,variables} ,) {

                let _data = _.get('addTodo')(data)
                const todos = _.get('todos')(cache.readQuery({query:GET_ALL_TODOS,variables}))
                let {text,userId} = variables
                let newTodo = {..._data,completed:false,text}
                let writeTodos = [...todos,newTodo]
                cache.writeQuery({query:GET_ALL_TODOS,data:{
                    todos:writeTodos},variables:{userId}
                    })

                const CacheUserId = cache.identify({id: userId, __typename: 'User'})
                const CacheTypeId = cache.identify({id: _data.id, __typename: 'Todo'})

                cache.modify({
                    id:CacheUserId,
                    fields: {
                        todos(todos){
                            let newTodo = {__ref:CacheTypeId}
                           return [...todos,newTodo]
                        }
                    }

                })

            }}
    )
    return { mutate, data, error };
}

