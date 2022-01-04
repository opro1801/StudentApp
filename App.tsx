import LandingContextProvider from './contexts/LandingContext';
import LandingNavigator from './screens/Landing/LandingNavigator';
import LandingScreen from './screens/Landing/LandingScreen';
import MainNavigationContainer from './screens/MainPages/MainNavigationContainer';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  from,
} from '@apollo/client';

export const JWT_TOKEN = 'JWT_TOKEN';

const httpLink = createHttpLink({
  uri: 'https://fantasktic-test.herokuapp.com/graphql',
  // uri:process.env.NODE_ENV === "production" ? process.env.REACT_APP_BACKEND_PRODUCTION_SERVER_URL : process.env.REACT_APP_BACKEND_TEST_SERVER_URL,
});
const authMiddleware = new ApolloLink((operation, forward) => {
  const customHeaders = operation.getContext().hasOwnProperty('headers')
    ? operation.getContext().headers
    : {};
  const jwtToken = localStorage.getItem(JWT_TOKEN);
  operation.setContext({
    headers: {
      ...customHeaders,
      //we can also set the authorization header
      authorization: `Bearer ${jwtToken}`,
    },
  });
  return forward(operation);
});
export const apolloClient = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache: new InMemoryCache({
    // addTypename:false
  }),
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <LandingContextProvider>
        <LandingNavigator />
      </LandingContextProvider>
    </ApolloProvider>
  );
}
