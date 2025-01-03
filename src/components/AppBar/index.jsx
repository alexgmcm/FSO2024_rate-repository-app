import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
import { useSignOut } from '../../hooks/useSignOut';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgDark,
    color: theme.colors.textLight,
    flexDirection: 'row',
    alignItems: "flex-start",
    gap: 16
    
    // ...
  },
  // ...
});

const AppBar = () => {
const signOut = useSignOut();
const signInTab = signOut ?  <AppBarTab text="Sign Out" link="/" onPressFunc={signOut}/> : <AppBarTab text="Sign In" link="/signin"/>
const createReviewTab = signOut ? <AppBarTab text="Add Review" link="/review"/> : <></>
const MyReviewsTab = signOut ? <AppBarTab text="My Reviews" link="/myreviews"/> : <></>
const signUpTab = signOut ? <></> : <AppBarTab text="Sign Up" link="/signup" />
  return <View style={styles.container}>
      <ScrollView contentContainerStyle={{
            gap: 16
        }} horizontal>
    <AppBarTab text="Repositories" link="/"/>
    {signInTab}
    {createReviewTab}
    {signUpTab}
    {MyReviewsTab}
      </ScrollView>
    </View>;
};

export default AppBar;