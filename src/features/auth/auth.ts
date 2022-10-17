import { createBrowserHistory } from 'history';

export const onRedirectCallback = async (appState: any) => {
  const history = createBrowserHistory();
  history.replace({
    pathname: appState?.returnTo || window.location.pathname,
    search: '',
  });
};
