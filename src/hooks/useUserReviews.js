import { GET_ME } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export const useUserReviews = () => {

    const {data, loading, error} = useQuery(GET_ME, {variables: {"includeReviews": true}, fetchPolicy: 'cache-and-network',});
    return {data, loading, error}

}