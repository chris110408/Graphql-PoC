import React from 'react'
import TodoLink from './TodoLink'
import { VisibilityFilters } from '../models/VisibilityFilters';

import { Row, Col } from 'antd';


const TodoFilter = ({activeCount, activeVisibilityFilter, setVisibilityFilter }) => {
    const itemWord = activeCount === 1 ? "item" : "items";
    return (
        <Row>
            <Col span={4}>
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left

      </span>
            </Col>
                {Object.keys(VisibilityFilters).map((key) => VisibilityFilters[key]).map((filter) => (
                    <Col span={4} key={filter.id}>
                        <TodoLink
                            active={activeVisibilityFilter.id === filter.id}
                            setFilter={() => setVisibilityFilter(filter)}>
                            {filter.displayName}</TodoLink>
                    </Col>
                ))}

        </Row>
    )
};



export default TodoFilter
