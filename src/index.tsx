import React from 'react';
import ReactDOM from 'react-dom/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'urql';
import { DndProvider } from 'react-dnd';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { gqlClient } from './lib/gql-client';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH_ZERO_CLIENT_ID, AUTH_ZERO_DOMAIN } from './config/config';
import { onRedirectCallback } from './features/auth/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // FIX: Provider 共通化
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Auth0Provider
        domain={AUTH_ZERO_DOMAIN}
        clientId={AUTH_ZERO_CLIENT_ID}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <Provider value={gqlClient}>
          <App />
        </Provider>
      </Auth0Provider>
    </DndProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
