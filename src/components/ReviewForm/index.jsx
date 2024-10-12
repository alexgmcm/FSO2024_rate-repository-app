import { useFormik } from 'formik';
import * as yup from 'yup';
import {formStyles as styles, placeholderTextColor}  from '../formStyles';

import { TextInput,  View} from 'react-native';
import Text from '../Text';
import Button from '../Button';

const initialValues = {
    username: '',
    name: '',
    rating: "",
    review: ''
  };



const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("username is required"),
    name: yup
        .string()
        .required("repo name is required"),
    rating: yup
        .number()
        .required("rating is required")
        .positive("rating must be between 0 and 100")
        .lessThan(101, "rating must be between 0 and 100"),
    review: yup.string()
  })


const ReviewForm = () => {

    const onSubmit = (values) => {
      console.log(values)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });

      const FormInput = ({name}) => {

        return( <View>
          <View style={styles.inputBorder}>
            <TextInput
              placeholder={name}
            placeholderTextColor={placeholderTextColor}
              value={formik.values[name]}
              onChangeText={formik.handleChange(name)}
              style={styles.input}
            />
          </View>
          {formik.touched[name] && formik.errors[name] && (
        <Text style={styles.error}>{formik.errors[name]}</Text>
          )}
        </View>
       )
      }

    return (<View style={styles.form}>
      
      <FormInput name="username"/>
       <FormInput name="name"/>
       <FormInput name="rating"/>
       <FormInput name="review"/>


      <Button label="Create" onPress={formik.handleSubmit}/>
        
      </View>)
}

export default ReviewForm