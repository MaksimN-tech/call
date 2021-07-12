import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Calls';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

