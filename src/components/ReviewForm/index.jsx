import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import { useCreateReview } from '../../hooks/useCreateReview';
import { formStyles as styles } from '../formStyles';
import {  View} from 'react-native';
import Button from '../Button';
import FormTextInput from '../FormTextInput';
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
       <FormTextInput name="ownerName" formik={formik}/>
       <FormTextInput name="repositoryName" formik={formik}/>
       <FormTextInput name="rating" formik={formik}/>
       <FormTextInput name="review" formik={formik}/>
      <Button label="Create" onPress={formik.handleSubmit}/>
        
      </View>)
}

export default ReviewForm