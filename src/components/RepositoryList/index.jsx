import {View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import Text from '../Text';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from "use-debounce";
import List from './List';


const Search = ({searchQuery, setSearchQuery}) => {

  return (<Searchbar
    placeholder="Search"
    onChangeText={setSearchQuery}
    value={searchQuery}
  />)
}


const RepositoryList = () => {
const [searchQuery, setSearchQuery] = useState('');
const [debouncedQuery] = useDebounce(searchQuery, 500);

const [sortSetting, setSortSetting] = useState("latest");
const getRepositories = useRepositories()
const {data, loading, error} = getRepositories(sortSetting, debouncedQuery)

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
  <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <List data={data}/>
     </View>
  );
};

export default RepositoryList;