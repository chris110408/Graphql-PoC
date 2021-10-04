import React from 'react'
import TodoTextInput from './TodoTextInput'
import {chrisVar} from "../cache";
import { Row, Col ,Switch,Button,Divider} from 'antd';

export const TodoItem =({currentUserId,todo, completeTodo, deleteTodo,editTodo})=>{
    console.log('testvar')
    console.log(chrisVar())
    let [todoText,setTodoText]= React.useState(todo.text)
    const [editing,setEditing] = React.useState(false)
    let handleDoubleClick = () => {
        setEditing( true )
    }
    let handleSave = (id, text) => {
        if (text.length === 0) {
            deleteTodo(id)
        } else {
            editTodo(id, text)
            setTodoText(text)
            chrisVar(text)
        }

        setEditing(false)
    }

    let element =


                editing?       <Row> <Col span={24}> <TodoTextInput
                    currentUserId={currentUserId}
                    text={todo.text}
                    editing={editing}
                    onSave={(text) => handleSave(todo.id, text)} />

                    </Col ></Row>

           :

                    (
                        <Row>
                            <Col span={2}>{todo.id}</Col>
                        <Col span={3}>
                        <Switch
                            defaultChecked={todo.completed}
                                      onChange={(checked) => {
                                          completeTodo(todo.id,checked)
                                      }} />
                    </Col>
                <Col span={14}>
                    <label style={{display: 'flex', justifyContent: 'center'}} onDoubleClick={handleDoubleClick}>
                    {todoText}
                </label></Col>
                <Col span={4}> <Button  shape="circle" icon="close"  type="danger"
                                       onClick={() => deleteTodo(todo.id)} /></Col>

</Row>

        )

    return ( <li style={{listStyleType:'none'}}>
<Divider dashed/>
        {element}

    </li>)
}


