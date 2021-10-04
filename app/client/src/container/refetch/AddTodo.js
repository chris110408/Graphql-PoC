import React from 'react';
import TodoTextInput from '../../components/TodoTextInput'
import {ADD_TODO, useAddTodo} from '../../operation/basic/mutations/addTodo';
import {GET_ALL_TODOS} from "../../operation/queries/getAllTodos";
import {GET_ALL_Users} from "../../operation/queries/getAllUsers";


export default  ({currentUserId,currentUsers})=> {
    console.log('refetch ADD_TODO')
    console.log(currentUsers)
    const {mutate} = useAddTodo()
    return  <header className="header">
        <TodoTextInput
            newTodo
            onSave={(text) => {
                if (text.length !== 0) {
                    mutate({ refetchQueries: () => [{
                            query: GET_ALL_TODOS,   variables: { userId:currentUserId }
                        },{query: GET_ALL_Users}],variables: { text,userId:currentUserId } })
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>

}