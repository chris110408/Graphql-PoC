import { gql, useMutation, Reference } from "@apollo/client";

export const ADD_TODO = gql`
    mutation AddTodo ($text: String!,$userId:Int!) {
        addTodo (text: $text,userId:$userId) {
            id
        }
    }
`

export function useAddTodo () {
    const [mutate, { data, error }] = useMutation(
        ADD_TODO
    )
    return { mutate, data, error };
}