import { SIGN_IN } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
export const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
     return  mutate({ variables: { credentials: {username: username, password: password} } });
     
    };
  
    return [signIn, result];
  };