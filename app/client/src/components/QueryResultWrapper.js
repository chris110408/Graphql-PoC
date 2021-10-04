import React from 'react';
import { Spin, Alert } from 'antd';

const QueryResult = ({ loading, error, data, children }) => {

    if (error) {
        return <p>ERROR: {error.message}</p>;
    }
    if (loading) {
        return (
            <Spin tip="Loading...">

            </Spin>
        );
    }
    if (!data) {
        return <p>Nothing to show...</p>;
    }

    if (data) {
        return children;
    }
};

export default QueryResult;


