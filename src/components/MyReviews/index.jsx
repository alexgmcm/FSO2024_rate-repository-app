import { useUserReviews } from "../../hooks/useUserReviews"
import { FlatList } from "react-native"
import ReviewItem from "../ReviewItem"
import Text from "../Text"
import theme from "../../theme";

const MyReviews = () => {
    const {data, loading, error} = useUserReviews()
    if (loading) return(
        <Text>Loading...</Text>
        )
        if (error) return(
          <Text style={{"color": theme.colors.error}}>Error!: ${error.message}</Text>
        )
   
    const nodes = data.me.reviews.edges
    const reviews = nodes.map((x) => x.node)
    return (<FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        // ...
      />)

}

export default MyReviews