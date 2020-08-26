import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://15.207.185.188/graphql',
    fetch,
  }),
  cache: new InMemoryCache()
});
