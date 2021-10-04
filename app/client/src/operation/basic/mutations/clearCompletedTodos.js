
import { gql, useMutation } from "@apollo/client";

export const CLEAR_COMPLETED_TODOS = gql`
    mutation ClearCompletedTodos {
        clearCompletedTodos {
            success
            todos {
                id
                text
                completed
            }
        }
    }
`

export function useClearCompletedTodos () {
    const [mutate, { data, error }] = useMutation(
        CLEAR_COMPLETED_TODOS
    )
    return { mutate, data, error };
}