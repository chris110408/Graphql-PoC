import React from 'react'
import TodoFilter from '../TodoFilter'
import VisibleTodoList from '../../container/cache/VisibleTodoList'



/**
 * This is a view component. It doesn't define anything that
 * is responsible for querying or mutating, it just relies
 * on it from the upper layer component (namely, actions)
 */

const MainSection = ({   currentUserId,
                         todos,
                         activeVisibilityFilter,
                         todosCount,
                         completedCount,
                         actions,
                     }) =>{
    console.log(todosCount)

    return (
        <section style={{paddingTop:20}}>
            {!!todosCount && (
                <TodoFilter
                    activeVisibilityFilter={activeVisibilityFilter}
                    completedCount={completedCount}
                    activeCount={todosCount - completedCount}
                    onClearCompleted={actions.clearCompletedTodos}
                    setVisibilityFilter={actions.setVisibilityFilter}
                />
            )}
            <VisibleTodoList currentUserId={currentUserId} todos={todos} activeVisibilityFilter={activeVisibilityFilter}/>

        </section>
    )

}



export default MainSection;
