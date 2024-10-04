import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    color: 'white',
    flexDirection: 'row',
    alignItems: "flex-start",
    
    // ...
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
      <ScrollView contentContainerStyle={{
      gap: 16
}} horizontal>
    <AppBarTab text="Repositories" link="/"/> <AppBarTab text="Sign In" link="/signin"/>
      </ScrollView>
    </View>;
};

export default AppBar;