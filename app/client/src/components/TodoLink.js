import React from 'react'
import classnames from 'classnames'


const TodoLink = ({ active, children, setFilter }) =>
    (
        <a
            className={classnames({ selected: active })}
            style={{ cursor: 'pointer' }}
            onClick={() => setFilter()}
        >
            {children}
        </a>
    )



export default TodoLink
