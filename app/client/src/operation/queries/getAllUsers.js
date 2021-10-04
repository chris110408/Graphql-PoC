import { gql } from '@apollo/client'

export const GET_ALL_Users = gql`
    query GetAllUsers {
        allUsers {
            id
            username
            email
            todos {
                id
                completed
                text
            }
        }
    }
`

