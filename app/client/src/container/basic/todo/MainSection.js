import React from 'react'
import {TodoFilterContext}from '../../../models/basic/TodoContext'
import QueryResult from "../../../components/QueryResultWrapper";
import { useQuery, gql } from '@apollo/client'
import { useClearCompletedTodos } from '../../../operation/basic/mutations/clearCompletedTodos'
import { useCompleteAllTodos } from '../../../operation/basic/mutations/completeAllTodos'
import { GET_ALL_TODOS } from '../../../operation/queries/getAllTodos'
import _ from 'lodash/fp'
import MainSection from "../../../components/basic/MainSection";

const MainTodo = ({currentUserId}) =>
{
    const [visibilityFilter, setVisibilityFilter] = React.useContext(TodoFilterContext);



        const {
            loading:isTodosLoading,
            data:todosObj,
            error:todosError
        } = useQuery(GET_ALL_TODOS,{
    variables: { userId:currentUserId }


});
    console.log('maintodo')
    console.log(todosObj)



    const { mutate: clearCompletedTodos } = useClearCompletedTodos();
    const { mutate: completeAllTodos } = useCompleteAllTodos();
    let todos = _.get('todos')(todosObj)
    return (
        <QueryResult error={todosError} loading={isTodosLoading} data={todos}>
            {
                todos &&
        <MainSection
            currentUserId={currentUserId}
            todos={todos}
            activeVisibilityFilter={visibilityFilter}
            todosCount={todos.length}
            completedCount={_.flow(_.filter('complete'),(x=>x.length))(todos)}
            actions={{
                completeAllTodos,
                setVisibilityFilter,
                clearCompletedTodos,
            }}
        />}
        </QueryResult>
    );
}



export default MainTodo;