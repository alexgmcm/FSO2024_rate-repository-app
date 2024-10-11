import {  StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryView from './RepositoryView';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "lightgray"
  },
});
<Navigate to="/" replace />
const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar/>
    <Routes>
       <Route path="/" element={<RepositoryList />} />
       <Route path="/signin" element={<SignIn />} />
       <Route path="/repos/:id" element={<RepositoryView />}/>
    </Routes>
   
    </View>
  );
};

export default Main;