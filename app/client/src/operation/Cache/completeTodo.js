
import { gql, useMutation } from "@apollo/client";


export const COMPLETE_TODO = gql`
    mutation CompleteTodo ($id: Int!,$status:Boolean!) {
        completeTodo (id: $id,status:$status) {
            success
            todo {
                id
                text
                completed
            }
            errors {
                message
                path
            }
        }
    }
`

export function useCompleteTodo () {
    const [mutate, { data, error }] = useMutation(
        COMPLETE_TODO,{ update (cache, {data},{context,variables} ) {

                const {id,completed:newCompleted} = variables
                const CacheId = cache.identify({id: id, __typename: 'Todo'})
                cache.modify({
                    id:CacheId,
                    fields: {
                        completed() {
                            return newCompleted
                        }
                    }

                })
            }
        }
    )

    return { mutate, data, error };
}