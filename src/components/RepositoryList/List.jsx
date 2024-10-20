import { FlatList } from "react-native"
import RepositoryItem  from "./RepositoryItem"
import { View } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
const ItemSeparator = () => <View style={styles.separator} />;


const List = ({data}) => {

    

    return (<FlatList
        data={data.repositories.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem = {({item}) => (
          <RepositoryItem item={item.node}/>
        )}
      />)
}

export default List