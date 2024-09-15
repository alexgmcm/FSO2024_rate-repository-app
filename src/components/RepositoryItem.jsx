import { View, Image ,StyleSheet} from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    flexColumn: {
      flexDirection: 'row',
      gap:10,
      margin: 10
    },
    flexRow: {
        flexDirection: 'column',
        alignItems: "flex-start"
      },
    ownerAvatar: {
        flexGrow: 0,
        width: 50,
        height: 50 
    }
  });

const RepositoryItem = (props) => {
console.log(props.item.ownerAvatarUrl)
return (
    <View style={styles.flexRow}>
    <View style={styles.flexColumn}>
    <Image style={styles.ownerAvatar} source={{uri: props.item.ownerAvatarUrl}}/>
    <View style={styles.flexRow}>
    <Text fontWeight="bold">{props.item.fullName}</Text>
    <Text color="textSecondary">{props.item.description}</Text>
    <View style={{padding: 3, backgroundColor: theme.colors.primary}}>
    <Text color="textLight" style={{flexGrow: 0}}>{props.item.language}</Text>
    </View>
    </View>
    </View>

    <View style={styles.flexRow}>
    <View><Text></Text></View>

    </View>

    </View>

)
}

export default RepositoryItem