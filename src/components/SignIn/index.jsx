import SignInForm from '../SignIn/SignInForm';
import { useSignIn } from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import * as yup from 'yup';



const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();
   const  onSubmit =  async (values) => {
        const { username, password } = values;
        console.log("boo")
        console.log(values)

        try {
          const  {data} = await signIn({ username, password });
          console.log(data)
          navigate("/")
        } catch (e) {
          console.log(e);
        }
      };

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

      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });

    

    
  return (
<SignInForm formik={formik}/>
  )
};

export default SignIn;