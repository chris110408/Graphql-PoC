import React from 'react';
import TodoTextInput from '../../components/TodoTextInput'
import {ADD_TODO, useAddTodo} from '../../operation/Cache/addTodo';



export default  ({currentUserId,currentUsers})=> {
    console.log('cacheRnW ADD_TODO')
    console.log(currentUsers)
    const {mutate} = useAddTodo()
    return  <header className="header">
        <TodoTextInput
            newTodo
            onSave={(text) => {
                if (text.length !== 0) {
                    mutate({variables: { text,userId:currentUserId } })
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>

}