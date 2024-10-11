import RepositoryItem from "./RepositoryList/RepositoryItem";
import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Text from "./Text";
import { useParams } from "react-router-native";



const RepositoryView = () => {
    const {id} = useParams();
    const { data, error, loading } = useQuery(GET_REPOSITORY, { variables: {id: id}, fetchPolicy: 'cache-and-network',});
    if (loading) return(
    <Text>Loading...</Text>
    )
    if (error) return(
      <Text style={{"color": "red"}}>Error!: ${error.message}</Text>
    )
   
    console.log(data)
    return (<RepositoryItem item={data.repository} showUrl={true}/>)
}

export default RepositoryView