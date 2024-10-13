import { useFormik } from 'formik';
import * as yup from 'yup';
import {formStyles as styles, placeholderTextColor}  from '../formStyles';
import { useNavigate } from 'react-router-native';
import { useCreateReview } from '../../hooks/useCreateReview';
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
    ownerName: yup
        .string()
        .required("repo owner name is required"),
    repositoryName: yup
        .string()
        .required("repo name is required"),
    rating: yup
        .number()
        .required("rating is required")
        .positive("rating must be between 0 and 100")
        .lessThan(101, "rating must be between 0 and 100"),
    review: yup.string()
  })

  const FormInput = ({name, formik}) => {

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

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

    const onSubmit = async (values) => {
      const review = {ownerName: values.ownerName, repositoryName: values.repositoryName, rating: parseInt(values.rating), text: values.review}
      //console.log(review)
      try {
      const repoId = await createReview(review)
      console.log(repoId)
      navigate(`/repos/${repoId}`)
      } catch(err) {
        console.log(err.message)
        navigate('/')
      }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });

     

    return (<View style={styles.form}>
       <FormInput name="ownerName" formik={formik}/>
       <FormInput name="repositoryName" formik={formik}/>
       <FormInput name="rating" formik={formik}/>
       <FormInput name="review" formik={formik}/>
      <Button label="Create" onPress={formik.handleSubmit}/>
        
      </View>)
}

export default ReviewForm