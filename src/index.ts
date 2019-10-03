// src/index.ts
import { getInput, setFailed } from '@actions/core';
import { initApollo } from './initApollo';
import gql from 'graphql-tag';

const apiURL = getInput('apiURL', { required: true });
const apiToken = getInput('apiToken');
const gqlMutation = getInput('gqlMutation', { required: true });

async function startGraphQLAction(): Promise<void> {
  const client = initApollo({ apiURL, apiToken });

  try {
    await client.mutate({
      mutation: gql`
        ${gqlMutation}
      `
    });
  } catch {
    setFailed('GraphQL Mutation error');
  }
  console.log('Starting GraphQL Action');
}

startGraphQLAction();
