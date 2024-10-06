import { Pressable, View } from "react-native";
import Text from "../Text";
import { useNavigate } from "react-router-native";


const AppBarTab = ({text, link, onPressFunc}) => {
  const navigate = useNavigate();
  const onPress = onPressFunc ? async () => {await onPressFunc(); navigate(link)} : () => {navigate(link)}

    return (
      <View>
    <Pressable  onPress={onPress}>
        <Text fontWeight="bold" color="textLight">{text}</Text>
      </Pressable>
      </View>
      )
}

export default AppBarTab;