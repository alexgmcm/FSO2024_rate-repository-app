import {  View} from 'react-native';
import Button from '../Button';
import {formStyles as styles}  from '../formStyles';
import FormTextInput from '../FormTextInput';




const SignInForm = ({formik}) => {
     
    

  return (
    <View style={styles.form}>

      <FormTextInput formik={formik} name="username"/>
      <FormTextInput formik={formik} name="password" secureTextEntry={true}/>
    
  <Button label="Sign in" onPress={formik.handleSubmit}/>
    
  </View>

  )
};

export default SignInForm;