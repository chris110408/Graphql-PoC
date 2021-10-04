import { gql, useMutation } from "@apollo/client";

export const ADD_USER = gql`
    mutation RegisterMutation($registerInput: RegisterInput!) {
        register(registerInput: $registerInput) {
            ok
            errors {
                message
                path
            }
        }
    }
`

export function useAddUser () {
    const [mutate, { data, error }] = useMutation(
        ADD_USER
    )
    return { mutate, data, error };
}