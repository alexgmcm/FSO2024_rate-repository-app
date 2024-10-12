import theme from "../theme"
import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({ input: {
  backgroundColor: theme.colors.bgWhite,
  padding: 10,
  margin: 0,
  gap:0
  
},
inputBorder: {
  borderStyle: 'solid',
  borderColor: 'lightgray',
  borderWidth: "thin",
},
form: {
  backgroundColor: 'white',
  flexDirection: 'column',
  padding: 10,
  margin: 10,
  gap:20,
  justifyContent: "center"    
},
error: {
    color: theme.colors.error
}
});

export const placeholderTextColor = "lightgray";