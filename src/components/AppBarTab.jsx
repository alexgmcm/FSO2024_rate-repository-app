import { Pressable, View } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";


const AppBarTab = ({text, link}) => {
    return (
      <View>
    <Pressable  onPress={() => (null)}>
      <Link to={link}>
        <Text fontWeight="bold" color="textLight">{text}</Text>
       </Link>
   
      </Pressable>
      </View>
      )
}

export default AppBarTab;