import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { App } from './App';

const BASE_URI = 'https://dummyapi.io/data/graphql';

const client = new ApolloClient({
    uri: BASE_URI,
    cache: new InMemoryCache(),
    headers: {
        'app-id': '62269bb5d03c65398d6be787' // process.env.DUMMY_API_ID
    }
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);