import { View, Image ,StyleSheet} from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    flexColumn: {
      flexDirection: 'row',
      gap:0,
      margin:5,
      flexWrap: 'nowrap',
      flexShrink: 9
     
    },
    flexRow: {
      margin: 5,
      gap: 5,
        backgroundColor: 'white',
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

const RepositoryItem = (props) => {
return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumn}>
        <Image style={styles.ownerAvatar} source={{uri: props.item.ownerAvatarUrl}}/>
        <View style={styles.flexRow}>
          <Text fontWeight="bold">{props.item.fullName}</Text>
          <Text color="textSecondary" >{props.item.description}</Text>
          <View style={{padding: 3, backgroundColor: theme.colors.primary}}>
            <Text color="textLight" style={{flexGrow: 0}}>{props.item.language}</Text>
          </View>
        </View>
      </View>
    </View>

)
}

export default RepositoryItem