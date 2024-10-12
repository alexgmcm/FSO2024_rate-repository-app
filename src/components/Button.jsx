import { StyleSheet, Pressable } from "react-native"
import Text from "./Text"
const Button = ({label, onPress}) => {
    const styles = StyleSheet.create({ button: {
       padding: 10,
        color: 'white',
        backgroundColor: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center"
      },})

    return (<Pressable onPress={onPress}>
        <Text style={styles.button}>{label}</Text>
      </Pressable>)
}

export default Button