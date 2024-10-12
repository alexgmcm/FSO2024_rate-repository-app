import Button from "../Button"
import { View } from "react-native";
import * as Linking from 'expo-linking';
import theme from "../../theme";
const UrlButton = ({url}) => {
    const style = {
        padding: 10,
        justifyContent: "center",    
        backgroundColor: theme.colors.bgWhite,
        flexDirection: 'column',
    }
    const onPress = () => {
        Linking.openURL(url)
    }

    return (<View style={style}>
    <Button label="Open in GitHub" onPress={onPress}/>
    </View>
)
}

export default UrlButton