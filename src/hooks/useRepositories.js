import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

    const getRepositories =  (sortSetting) => {
    let orderSettings;
    switch(sortSetting) {
        case "latest":
            orderSettings = {"orderBy": "CREATED_AT","orderDirection" : "DESC" }
            break
        case "highestRated":
            orderSettings = {"orderBy": "RATING_AVERAGE","orderDirection" : "DESC" }
            break
        case "lowestRated":
            orderSettings = {"orderBy": "RATING_AVERAGE","orderDirection" : "ASC" }
            break
    }
    const {data, loading, error} = useQuery(GET_REPOSITORIES, {variables: orderSettings, fetchPolicy: 'cache-and-network',});
    return {data, loading, error}
    }
return getRepositories
}


export default useRepositories