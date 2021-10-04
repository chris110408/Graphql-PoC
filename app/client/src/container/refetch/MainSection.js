import React from 'react'

import QueryResult from "../../components/QueryResultWrapper";
import { useQuery, gql } from '@apollo/client'

import { GET_ALL_TODOS } from '../../operation/queries/getAllTodos'
import _ from 'lodash/fp'
import MainSection from "../../components/refetch/MainSection";
import {GET_VISIBILITY_FILTER} from '../../operation/queries/getVisibilityFilter'
// import  setVisibilityFilter from '../../operation/refetchlocal/mutations/setVisibilityFilter'
import {visibilityFilterVar,initedVisibilityFilterVar,chrisVar} from '../../cache'
import {VisibilityFilters} from "../../models/VisibilityFilters";
const MainTodo = ({currentUserId}) =>
{

    const { data: visibilityFilter } = useQuery(GET_VISIBILITY_FILTER);

    let setVisibilityFilter =visibilityFilterVar

        const {
            loading:isTodosLoading,
            data:todosObj,
            error:todosError
        } = useQuery(GET_ALL_TODOS,{
    variables: { userId:currentUserId }


});

    let todos = _.get('todos')(todosObj)
    return (
        <QueryResult error={todosError} loading={isTodosLoading} data={todos}>
            {
                todos &&
        <MainSection
            currentUserId={currentUserId}
            todos={todos}
            activeVisibilityFilter={_.get('visibilityFilter')(visibilityFilter)}
            todosCount={todos.length}
            completedCount={_.flow(_.filter('complete'),(x=>x.length))(todos)}
            actions={{
                setVisibilityFilter,
            }}
        />}
        </QueryResult>
    );
}



export default MainTodo;