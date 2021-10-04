import {Card, Col, Row} from "antd";
import _ from "lodash/fp";
import React from "react";


let createUserCard = ({username,todos})=>(
    <Col span={12}>
        <Card key={username} title={username} bordered={false} style={{ margin:20,width: 300 }}>
            {
                _.map(({text,completed})=>(

                    <p>
                        {`${completed?"completed":"active"} ${text}`}
                    </p>


                ))(todos)
            }
        </Card>
    </Col>
)

export default ({currentUsers})=>(
    <Row>
        {_.map(createUserCard)(currentUsers)}
    </Row>

)