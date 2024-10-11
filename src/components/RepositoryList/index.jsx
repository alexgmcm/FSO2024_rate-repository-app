import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../graphql/queries';
import Text from '../Text';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network',});
if (loading) return(
<Text>Loading...</Text>
)
if (error) return(
  <Text style={{"color": "red"}}>Error!: ${error.message}</Text>
)
//console.log(data)

  return (
    <FlatList
      data={data.repositories.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem = {({item}) => (
        <RepositoryItem item={item.node}/>
      )}
    />
  );
};

export default RepositoryList;