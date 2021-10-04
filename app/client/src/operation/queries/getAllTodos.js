
import { gql } from '@apollo/client'

export const GET_ALL_TODOS = gql`
    query GetAllTodos($userId: Int) {
        todos(userId: $userId) {
            id
            completed
            text
        }
    }
`