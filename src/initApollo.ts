// src/initApollo.ts
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

interface InitApolloParams {
  apiURL: string;
  apiToken: string;
}

export function initApollo({
  apiURL,
  apiToken
}: InitApolloParams): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: createHttpLink({
      uri: apiURL,
      headers: apiToken ? { Authorization: `Bearer ${apiToken}` } : {}
    }),
    cache: new InMemoryCache()
  });
}
