import { CREATE_REVIEW } from "../graphql/mutations";
import {  useApolloClient, useMutation } from "@apollo/client";

export const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
    const apolloClient = useApolloClient()
    const createReview = async ( review ) => {
    console.log(review)
      // call the mutate function here with the right arguments
     const {data} =  await mutate({ variables:  {review: review}  });
     apolloClient.resetStore();

     return data.createReview.repositoryId
    };
  
    return [createReview, result];
  };