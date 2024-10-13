import {  CREATE_USER } from "../graphql/mutations";
import {  useApolloClient, useMutation } from "@apollo/client";

const useCreateUser = () => {
    const [mutate, result] = useMutation(CREATE_USER);
    const apolloClient = useApolloClient()
    const createUser = async ( user ) => {
    console.log(user)
      // call the mutate function here with the right arguments
     const {data} =  await mutate({ variables:  {user: user}  });
     apolloClient.resetStore();

     return data.createUser.id
    };
  
    return [createUser, result];

}

export default useCreateUser