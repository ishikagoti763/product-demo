import { useFormik } from "formik"
// import "../App.css"
// import axios from "axios"
import "./Home.css"
import { useDispatch } from "react-redux"
// import { ENDPOINT } from "../../../config/config"
import { loginUser } from "./HomeSlice"

const Login = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: '', 
            password: '' 
        }, 
        validate: (values) => {
            let error = {}
            if(!values.username){
                error.username = "Please Enter username";
            }
            if(!values.password){
                error.password = "Please Enter password";
            }
            return error;
        }, 
        // onSubmit: (values) => {

        //     console.log(values);
        //     // try{
        //     //     console.log(values);
        //     //     axios.post(`${ENDPOINT}/auth/login` , {
        //     //         headers: {'Content-Type': 'application/json'},
        //     //         email: values.email,
        //     //         password: values.password

        //     //     }).then(res => {
        //     //         console.log(res);
        //     //     }).catch(error => {
        //     //         console.log(error);
        //     //     })   
        //     // } catch(error) {
        //     //     console.log(error);
        //     // }
        // }
        onSubmit: (values) => {
            dispatch(loginUser(values))
        }
    })
    return (
        <>
            <h1>Log In</h1> 
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input 
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        placeholder="Enter Your userName"
                        className={formik.errors.username && "error-text"}
                    />
                    {formik.errors.username && <p className="error">{formik.errors.username}</p>}
                </div>
               
                <div>
                    <input 
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter Your Password"
                        className={formik.errors.password && "error-text"}
                    />
                    {formik.errors.password && <p className="error">{formik.errors.password}</p>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Login


