import React from 'react'
import {TodoFilterProvider} from "../models/basic/TodoContext";
import MainTodos from "../container/basic/todo/MainSection"
import {Row, Col,Card ,Divider} from 'antd';
import AddTodo from '../container/basic/todo/AddTodo'
import { useQuery } from '@apollo/client'
import {GET_ALL_Users} from "../operation/queries/getAllUsers";
import QueryResult from "../components/QueryResultWrapper";
import UserSelect from '../components/UserSelect'
import _ from 'lodash/fp'
import UsersCard from "../components/UsersCard";
const ContextStorePage = () => {
    const [currentUserId, setCurrentUser]= React.useState()

    const {
        loading:isUserLoading,
        data:users,
        error:userError
    } =  useQuery(GET_ALL_Users);
    let currentUsers = _.get('allUsers')(users)
    React.useEffect(()=>{
        if(currentUsers){
            currentUserId||setCurrentUser(_.get('id')(currentUsers[0]))
        }
    },[currentUsers])

   return (
       <>
           <h1>Context and raw mutation</h1>
           <TodoFilterProvider>
           <QueryResult  error={userError} loading={isUserLoading } data={users}>
               {isUserLoading || <UserSelect currentUser={currentUserId} setCurrentUser={setCurrentUser} users={currentUsers}/>}
               <Divider orientation="center"> todos</Divider>

                   <Row>
                       <Col span={12} >
                           <Card title="Todos" bordered={false}>
                           <AddTodo currentUserId={currentUserId}/>
                            <MainTodos  currentUserId={currentUserId}/>
                           </Card>
                       </Col>
                       <Col span={1} >
                       </Col>
                       <Col span={11} >
                           Users
                           <UsersCard currentUsers={currentUsers}/>
                       </Col>
                   </Row>

           </QueryResult>
           </TodoFilterProvider>
</>)
}




export default ContextStorePage
