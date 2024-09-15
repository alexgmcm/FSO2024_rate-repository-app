import { Pressable } from "react-native";
import Text from "./Text";



const AppBarTab = ({text}) => {

    return (<Pressable  onPress={() => (null)}>
        <Text fontWeight="bold" color="textLight" >{text}</Text>
      </Pressable>)
}

export default AppBarTab;