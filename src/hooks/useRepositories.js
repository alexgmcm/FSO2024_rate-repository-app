import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

    const getRepositories =  (sortSetting, searchQuery) => {
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
    const {data, loading, error} = useQuery(GET_REPOSITORIES, {variables: variables, fetchPolicy: 'cache-and-network',});
    return {data, loading, error}
    }
return getRepositories
}


export default useRepositories