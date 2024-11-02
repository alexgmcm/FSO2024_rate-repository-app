import { DEL_REVIEW } from "../graphql/mutations";
import {  useApolloClient, useMutation } from "@apollo/client";

export const useDelReview = () => {
    const [mutate, result] = useMutation(DEL_REVIEW);
    const apolloClient = useApolloClient()
    const deleteReview = async ( id ) => {
      // call the mutate function here with the right arguments
     const {data} =  await mutate({ variables:  {deleteReviewId: id}  });
     apolloClient.resetStore();

     return data
    };
  
    return [deleteReview, result];
  };