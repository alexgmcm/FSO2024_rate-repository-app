import { TextInput,  View} from 'react-native';
import Text from '../Text';
import Button from '../Button';
import {formStyles as styles, placeholderTextColor}  from '../formStyles';





const SignInForm = ({formik}) => {
     
    

  return (
    <View style={styles.form}>
    <View style={styles.inputBorder}>
    <TextInput
      placeholder="username"
      placeholderTextColor={placeholderTextColor}
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
    placeholderTextColor={placeholderTextColor}
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      secureTextEntry
      style={styles.input}
    />
    </View>
    {formik.touched.password && formik.errors.password && (
  <Text style={styles.error}>{formik.errors.password}</Text>
 )}
  <Button label="Sign in" onPress={formik.handleSubmit}/>
    
  </View>

  )
};

export default SignInForm;