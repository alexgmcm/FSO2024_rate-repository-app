import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import Text from '../Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
const [sortSetting, setSortSetting] = useState("latest");
const getRepositories = useRepositories()
const {data, loading, error} = getRepositories(sortSetting)

if(loading){
  return(<Text>loading...</Text>)
}
if(error){
  return(<Text>{error.message}</Text>)
}




  return (<View><Picker
    selectedValue={sortSetting}
    onValueChange={(itemValue) =>
      setSortSetting(itemValue)
    }
    mode="dialog">
    <Picker.Item label="Latest" value="latest" />
    <Picker.Item label="Highest Rated" value="highestRated" />
    <Picker.Item label="Lowest Rated" value="lowestRated" />
  </Picker>
    <FlatList
      data={data.repositories.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem = {({item}) => (
        <RepositoryItem item={item.node}/>
      )}
    />
     </View>
  );
};

export default RepositoryList;