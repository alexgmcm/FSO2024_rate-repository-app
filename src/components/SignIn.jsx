import { TextInput, Pressable, View, StyleSheet} from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';


const styles = StyleSheet.create({
    input: {
      backgroundColor: "white",
      padding: 10,
      margin: 0,
      gap:0
      
    },
    inputBorder: {
        borderStyle: 'solid',
      borderColor: 'lightgray',
      borderWidth: "thin",
    },
    button: {
    
      padding: 10,
      color: 'white',
      backgroundColor: 'blue',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: "center"
    },
    form: {
      backgroundColor: 'white',
      flexDirection: 'column',
      padding: 10,
      margin: 10,
      gap:20,
      justifyContent: "center"
     
    },
  });

const initialValues = {
    username: '',
    password: '',
  };

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
      });

  return (

    <View style={styles.form}>
    <View style={styles.inputBorder}>
    <TextInput
      placeholder="username"
      placeholderTextColor="lightgray"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      style={styles.input}
    />
    </View>
    <View style={styles.inputBorder}>
    <TextInput
      placeholder="password"
    placeholderTextColor="lightgray"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      secureTextEntry
      style={styles.input}
    />
    </View>
    <Pressable onPress={formik.handleSubmit}>
      <Text style={styles.button}>Sign in</Text>
    </Pressable>
  </View>

  )
};

export default SignIn;