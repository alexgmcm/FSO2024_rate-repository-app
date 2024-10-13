import {formStyles as styles, placeholderTextColor}  from './formStyles';
import Text from './Text';
import { View } from 'react-native';
import { TextInput } from 'react-native';

const FormTextInput = ({name, formik, secureTextEntry=false}) => {

    return( <View>
      <View style={styles.inputBorder}>
        <TextInput
          placeholder={name}
        placeholderTextColor={placeholderTextColor}
          value={formik.values[name]}
          onChangeText={formik.handleChange(name)}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {formik.touched[name] && formik.errors[name] && (
    <Text style={styles.error}>{formik.errors[name]}</Text>
      )}
    </View>
   )
  }
  export default FormTextInput