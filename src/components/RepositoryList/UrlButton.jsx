import Button from "../Button"
import * as Linking from 'expo-linking';

const UrlButton = ({url}) => {

    const onPress = () => {
        Linking.openURL(url)
    }

    return (<Button label="Open in GitHub" onPress={onPress}/>)
}

export default UrlButton