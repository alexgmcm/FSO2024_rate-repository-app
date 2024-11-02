import RepositoryItem from "../RepositoryList/RepositoryItem";
import { GET_REPOSITORY } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import Text from "../Text";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ReviewItem from "../ReviewItem";
import theme from "../../theme";
const RepositoryView = () => {
    const {id} = useParams();
    const { data, error, loading } = useQuery(GET_REPOSITORY, { variables: {id: id}, fetchPolicy: 'cache-and-network',});
    if (loading) return(
    <Text>Loading...</Text>
    )
    if (error) return(
      <Text style={{"color": theme.colors.error}}>Error!: ${error.message}</Text>
    )

   const header = <RepositoryItem item={data.repository} showUrl={true}/>
   const reviews = data.repository.reviews.edges.map((x) => x.node ) 
    console.log(reviews)
    return (<FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>  header }
      // ...
    />)
}

export default RepositoryView