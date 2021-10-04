
import React from 'react'
import TodoList from '../../components/TodoList';
import {  VisibilityFilters } from '../../models/VisibilityFilters';
import { useCompleteTodo } from '../../operation/Cache/completeTodo';
import { useDeleteTodo } from '../../operation/Cache/deleteTodo';
import { useEditTodo } from '../../operation/Cache/editTodo';
import {GET_ALL_TODOS} from "../../operation/queries/getAllTodos";
import {GET_ALL_Users} from "../../operation/queries/getAllUsers";



function filterTodosByVisibility(visibilityFilter, todos) {
    switch (visibilityFilter.id) {
        case VisibilityFilters.SHOW_ALL.id:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED.id:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE.id:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + visibilityFilter);
    }
}

export default   ({currentUserId,activeVisibilityFilter,todos})=> {



    const { mutate: completeTodo } = useCompleteTodo();
    const { mutate: deleteTodo } = useDeleteTodo();
    const { mutate: editTodo } = useEditTodo();

    const filteredTodos = filterTodosByVisibility(activeVisibilityFilter, todos);
   //have to add extra UserId arg
    return (
        <TodoList
            currentUserId={currentUserId}
            filteredTodos={filteredTodos}
            actions={{
                completeTodo: (id,status) => completeTodo({ variables: { id ,status,userId:currentUserId}}),
                deleteTodo: (id) => deleteTodo({ variables: { id ,userId:currentUserId}}),
                editTodo: (id, text) => editTodo({ variables: { id, text,userId:currentUserId }})
            }}/>
    )

}
