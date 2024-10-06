import { useApolloClient, useQuery } from "@apollo/client";
import useAuthStorage from './useAuthStorage';
import { GET_ME } from "../graphql/queries";



export const useSignOut = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const { error, data } = useQuery(GET_ME);
    if (error){
        console.log(error.message)
    }
    console.log(data)
    const isSignedIn = data?.me ? true : false


    const signOut = async () => {
        console.log("boo")
        await authStorage.removeAccessToken()
        apolloClient.resetStore();
    }
  
    if(isSignedIn){
        return signOut
    }
    return false
}
