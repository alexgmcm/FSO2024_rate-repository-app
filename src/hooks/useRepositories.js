import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortSetting, searchQuery) => {

    let variables;
    switch(sortSetting) {
        case "latest":
            variables = {"orderBy": "CREATED_AT","orderDirection" : "DESC" }
            break
        case "highestRated":
            variables = {"orderBy": "RATING_AVERAGE","orderDirection" : "DESC" }
            break
        case "lowestRated":
            variables = {"orderBy": "RATING_AVERAGE","orderDirection" : "ASC" }
            break
    }
    variables["searchKeyword"] = searchQuery
    variables["first"] = 7
    const {data, loading, error, fetchMore} = useQuery(GET_REPOSITORIES, {variables: variables, fetchPolicy: 'cache-and-network',});

    
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };



    return {data, loading, error, fetchMore: handleFetchMore}
    }



export default useRepositories