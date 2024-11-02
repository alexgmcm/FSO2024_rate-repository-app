import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client";




export const useGetRepository = (id) => {
let variables={};
variables["id"] = id;
variables["first"] = 1


const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, { variables: variables, fetchPolicy: 'cache-and-network',});

const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    console.log(canFetchMore)
    if (!canFetchMore) {
      return;
    }
    console.log(data.repository.reviews.pageInfo.endCursor)
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

return({ data, error, loading, fetchMore: handleFetchMore })

}