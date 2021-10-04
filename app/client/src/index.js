import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css'
import {cache} from './cache'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: cache,
    connectToDevTools: true,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Pages/>
    </ApolloProvider>,
    document.getElementById('root')
);
