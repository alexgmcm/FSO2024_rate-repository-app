import { TextInput, Pressable, View, StyleSheet} from 'react-native';
import Text from '../Text';
import { useFormik } from 'formik';
import * as yup from 'yup';




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
    error: {
        color: "#d73a4a"
    }
  });

const initialValues = {
    username: '',
    password: '',
  };

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("username is required"),
    password: yup
        .string()
        .required("password is required")
  })

const SignInForm = ({onSubmit}) => {
     
    const formik = useFormik({
        initialValues,
        validationSchema,
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
    {formik.touched.username && formik.errors.username && (
  <Text style={styles.error}>{formik.errors.username}</Text>
 )}
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
    {formik.touched.password && formik.errors.password && (
  <Text style={styles.error}>{formik.errors.password}</Text>
 )}
    <Pressable onPress={formik.handleSubmit}>
      <Text style={styles.button}>Sign in</Text>
    </Pressable>
  </View>

  )
};

export default SignInForm;