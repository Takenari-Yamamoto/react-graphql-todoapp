import { createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import { API_KEY, API_URL } from '../config/config';

// 修正必要
const wsClient = createWSClient({
  url: ``,
  connectionParams: {
    headers: {
      Authorization: `${API_KEY}`, //ここで送らないとurqlのsubscriptionができてなかった。
    },
  },
});

export const gqlClient = createClient({
  url: `${API_URL}`,
  fetchOptions: {
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': `${API_KEY}`,
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
