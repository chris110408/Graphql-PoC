import React from 'react'
import {TodoItem} from './TodoItem'
import _ from 'lodash/fp'



const TodoList = ({ currentUserId,filteredTodos, actions }) => {
    return (
        <ul className="todo-list">
            {_.map(todo =>
                <TodoItem  key={todo.id} todo={todo} currentUserId={currentUserId} {...actions} />
            )(filteredTodos)}
        </ul>
    )

}

export default TodoList
