
import { gql, useMutation } from "@apollo/client";

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
        DELETE_TODO,
    )

    return { mutate, data, error };
}