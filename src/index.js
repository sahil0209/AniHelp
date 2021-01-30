import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://anihelp-server.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render (
        <ApolloProvider client={client}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
    </ApolloProvider>
            ,document.getElementById('root'));