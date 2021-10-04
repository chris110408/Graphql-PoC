import React, { Component } from 'react'
import { Input } from 'antd';

import classnames from 'classnames'
// import './todo.css'

export default ({onSave,newTodo,text,editing,placeholder})=>{

    const  [_text,setText]=React.useState(text||'')


    let handleSubmit = (e) => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            onSave(text)
            if (newTodo) {
                setText('' )
            }
        }
    }

    let handleChange = (e) => {
        setText( e.target.value )
    }

    let handleBlur = (e) => {
        if (!newTodo) {
            onSave(e.target.value)
        }
    }

        return (
            <Input
                   size={editing?"small":"large"}
                   type="text"
                   placeholder={placeholder}
                   autoFocus={true}
                   value={_text}
                   onBlur={handleBlur}
                   onChange={handleChange}
                   onKeyDown={handleSubmit} />
        )

}
