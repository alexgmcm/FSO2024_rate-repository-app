import {View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import React from 'react'


const ListHeader = ({searchQuery, setSearchQuery , sortSetting, setSortSetting}) => {  
      return (<View><Picker
        style={{height: 44}} itemStyle={{height: 44}}
        selectedValue={sortSetting}
        onValueChange={(itemValue) =>
          setSortSetting(itemValue)
        }
        mode="dialog">
        <Picker.Item label="Latest" value="latest" />
        <Picker.Item label="Highest Rated" value="highestRated" />
        <Picker.Item label="Lowest Rated" value="lowestRated" />
      </Picker>
      <Searchbar
      style={{height: 44}}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
         </View>
      );

}

// Memoize ListHeader to avoid unnecessary re-renders
export default React.memo(ListHeader);



