import { StyleSheet, Pressable } from "react-native"
import Text from "./Text"
import theme from "../theme"
const Button = ({label, onPress, colour="blue"}) => {
    const colourMap = {"blue": theme.colors.primary, "red": theme.colors.error}
    const styles = StyleSheet.create({ button: {
       padding: 10,
        backgroundColor:colourMap[colour],
        fontSize: 20,
        textAlign: "center"
      },})

    return (<Pressable onPress={onPress}>
        <Text fontWeight="bold" color="textLight" style={styles.button}>{label}</Text>
      </Pressable>)
}

export default Button