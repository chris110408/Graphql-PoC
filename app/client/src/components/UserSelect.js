import React, { Component } from 'react'
import { Select, Row, Col, Divider  } from 'antd';
import _ from 'lodash/fp'

const { Option } = Select;
let selectElement
export default ({currentUser, setCurrentUser,users})=>{



    return (
        <>
        <Divider orientation="center">   select a user</Divider>
            <Row justify="center">

                <Col span={4} offset={8}>
                    <Select  defaultValue={_.get('id')(users[0])} style={{ width: 200 }} onChange={setCurrentUser}>
                        {_.flow(_.map(user => (
                            <Option key={user.id} value={user.id}>{user.username}</Option>
                        )))(users)}
                    </Select>
                </Col>

           </Row>

        </>

    )


}
