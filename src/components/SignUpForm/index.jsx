import FormTextInput from "../FormTextInput"
import { useFormik } from "formik"
import * as yup from 'yup';
import { View } from "react-native";
import { formStyles as styles } from "../formStyles";
import Button from "../Button";
import useCreateUser from "../../hooks/useCreateUser";
import { useNavigate } from "react-router-native";
import { useSignIn } from "../../hooks/useSignIn";

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: "",
  };

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5,"username must be at least 5 characters")
        .max(30,"username must be at least 30 characters")
        .required("username is required"),
    password: yup
        .string()
        .min(5,"password must be at least 5 characters")
        .max(30,"password must be at least 30 characters")
        .required("password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null],"password confirmation must match password")
        .min(5,"password must be at least 5 characters")
        .max(30,"password must be at least 30 characters")
        .required("please confirm your password"),
   
  })


const SignUpForm = () => {
    const [createUser] = useCreateUser()
    const navigate = useNavigate()
    const [signIn] = useSignIn()

    const  onSubmit = async (values) => {
        const username = values.username
        const password = values.password
        const user = {username, password}
        try{
        await createUser(user)
        await signIn(user)
        navigate('/') 
        } catch(err){
            console.log(err.message)
        }
        
    }

    const formik = useFormik({initialValues,
        validationSchema,
       onSubmit})
    
   
    return (<View style={styles.form}>
        <FormTextInput name="username" formik={formik} />
        <FormTextInput name="password" formik={formik} secureTextEntry={true}/>
        <FormTextInput name="passwordConfirmation" formik={formik} secureTextEntry={true}/>
        <Button label="Sign Up" onPress={formik.handleSubmit}/>
    </View>)
}

export default SignUpForm