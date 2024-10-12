import { View, Image ,StyleSheet, Pressable} from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import UrlButton from './UrlButton';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
      gap: 5,
        backgroundColor: 'white',
  },
    flexColumn: {
      flexDirection: 'row',
      gap:0,
      margin:5,
      flexWrap: 'nowrap',
      flexShrink: 9
     
    },
    flexRow: {
      margin: 2,
      
        flexDirection: 'column',
        alignItems: "flex-start",
        flexWrap: 'nowrap',
        flexShrink: 1
      },
    ownerAvatar: {
      marginLeft: 5,
        flexGrow: 0,
        flexShrink: 0,
        width: 50,
        height: 50 
    }
  });

const RepositoryItem = ({item, showUrl}) => {
const navigate = useNavigate();
const urlComponent = showUrl ? <UrlButton url={item.url}/> : <></>
const onPress = () => {
  navigate(`/repos/${item.id}`)
}
  
return (
  <View style={styles.container}>
    <View testID="repositoryItem" style={styles.flexRow}>
      <Pressable onPress={onPress}>
      <View style={styles.flexColumn}>
        <Image style={styles.ownerAvatar} source={{uri: item.ownerAvatarUrl}}/>
        <View style={styles.flexRow}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary" >{item.description}</Text>
          <View style={{padding: 3, backgroundColor: theme.colors.primary}}>
            <Text color="textLight" style={{flexGrow: 0}}>{item.language}</Text>
          </View>
        </View>
      </View>
      </Pressable>
      
    </View>
    {urlComponent}
    </View>

)
}

export default RepositoryItem