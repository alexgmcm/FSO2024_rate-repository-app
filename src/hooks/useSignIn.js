import { SIGN_IN } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";
import useAuthStorage from './useAuthStorage';

export const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
     const {data} =  await mutate({ variables: { credentials: {username: username, password: password} } });
     console.log(data.authenticate.accessToken)
     await authStorage.setAccessToken(data.authenticate.accessToken)
     apolloClient.resetStore();
     return {data: data}
    };
  
    return [signIn, result];
  };