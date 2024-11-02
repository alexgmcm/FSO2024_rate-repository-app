import RepositoryItem from "../RepositoryList/RepositoryItem";
import { useGetRepository } from "../../hooks/useGetRepository";
import Text from "../Text";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import theme from "../../theme";
const RepositoryView = () => {
    const {id} = useParams();
    const {data, loading, error, fetchMore} = useGetRepository(id)
    if (loading) return(
    <Text>Loading...</Text>
    )
    if (error) return(
      <Text style={{"color": theme.colors.error}}>Error!: ${error.message}</Text>
    )

   const header = <RepositoryItem item={data.repository} showUrl={true}/>
   const reviews = data.repository.reviews.edges.map((x) => x.node ) 
  
    return (<FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>  header }
      onEndReached={() => {console.log("end of list reached");fetchMore()}}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator = {true}
      scrollEnabled={true}
      
      // ...
    />
    )
}

export default RepositoryView