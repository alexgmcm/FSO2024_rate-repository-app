import { FlatList } from "react-native"
import RepositoryItem  from "./RepositoryItem"
import { View, Platform } from "react-native";
import { StyleSheet } from "react-native";
import React, { useCallback, useState} from 'react'
import ListHeader from "./ListHeader";
import { useDebounce } from "use-debounce";
import useRepositories from "../../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  
});
  
const ItemSeparator = () => <View style={styles.separator} />;

const List = () => {
  const [sortSetting, setSortSetting] = useState("latest");
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery] = useDebounce(searchQuery, 500);   
  const  {data, fetchMore} = useRepositories(sortSetting, debouncedQuery)
  // Memoize set functions to prevent re-renders in ListHeader
  const memoizedSetSearchQuery = useCallback((query) => setSearchQuery(query), []);
  const memoizedSetSortSetting = useCallback((setting) => setSortSetting(setting), []);
  
// use callback to memo-ise
  const renderListHeader = useCallback(() => {
    return <ListHeader searchQuery={searchQuery} setSearchQuery={memoizedSetSearchQuery}  sortSetting={sortSetting} setSortSetting={memoizedSetSortSetting} />;
  }, [searchQuery, sortSetting]);

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  return( <>
  {renderListHeader()}

  <FlatList
    data={data?.repositories?.edges || []}
    ItemSeparatorComponent={ItemSeparator}
    renderItem = {({item}) => (
      <RepositoryItem item={item.node}/>
    )}
    keyExtractor={(item) => item.node.id}
     onEndReached={onEndReach}
     onEndReachedThreshold={0.25}
     showsVerticalScrollIndicator = {true}
     scrollEnabled={true}
     style={Platform.OS === 'web' ? { height: '90vh' } : {height: 700 }}
    />
    </>)
}


export default List
