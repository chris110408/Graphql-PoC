import { gql, useMutation } from "@apollo/client";

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
        EDIT_TODO
    )

    return { mutate, data, error };
}