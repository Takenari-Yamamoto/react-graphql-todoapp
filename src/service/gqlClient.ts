import { createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

// 修正必要
const wsClient = createWSClient({
  url: ``,
  connectionParams: {
    headers: {
      Authorization: `${process.env.REACT_APP_HASURA_KEY}`, //ここで送らないとurqlのsubscriptionができてなかった。
    },
  },
});

export const gqlClient = createClient({
  url: `${process.env.REACT_APP_HASURA_URL}`,
  fetchOptions: {
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': `${process.env.REACT_APP_HASURA_KEY}`,
    },
  },
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});
