import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import axios from 'axios'
import { Formik, Form } from 'formik'
import  TextField  from './TextField'
import * as Yup from 'yup'


export const Register = () => {

    const navigate = useNavigate('')


    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');

    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be at least 15 characters or more')
        .required("Required"),
        lastName: Yup.string()
        .max(15, 'Must be at least 15 characters or more')
        .required("Required"),
        email: Yup.string()
        .email('Email is invalid')
        .required("Email is Required"),
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required("Password is required"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm Password is required')
    })



    const handleSubmit = (event) => {
        event.preventDefault()
        // const isValid = formValidation()
        const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        console.log(data)
        // alert('Your info has been received')

        axios.post('https://itusell.herokuapp.com/api/users/register', data)
        .then( response => {
            console.log(response.data)
            localStorage.setItem('users', JSON.stringify(response.data))
            toast.success('user successfully registered')

            if (response.data.success) {
                navigate('/login')
            }
            
        })

        .catch(error => {
            console.log(error)
            toast.error('user not registered')
        })
    }



    return (
        <div>
            <Formik 
            initialValue = {{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit={values => 
            console.log(values)}>

                {formik => (
                    <div>
                        <h1 className='my-4 font-weight-bold .display-4'>
                            Sign Up
                        </h1>

                        <Form>
                            <TextField label='Name'
                            name='Name'
                            type='text'
                            onChange={ (e) => setName(e.target.value)} />
                            <TextField label='Email'
                            name='email'
                            type='email'
                            onChange={ (e) => setEmail(e.target.value)} />
                            <TextField label='Password'
                            name='password'
                            type='password'
                            onChange={ (e) => setPassword(e.target.value)} />
                            <TextField label='Confirm Password'
                            name='confirmPassword'
                            type='password'
                            onChange={ (e) => setConfirmPassword(e.target.value)} />

                            <button className="btn btn-primary btn-block"
                            onClick={handleSubmit}>
                                Sign Up
                            </button>
                        </Form>
                    </div>
                )}
                
            </Formik>
        </div>
    )
}




// <h3>
//                     Sign Up
//                 </h3>

//                 <div className="form-group">
//                     <label htmlFor="">
//                         Full Name
//                     </label>
//                     <input type="text"
//                     className="form-control"
//                     placeholder="First Name"
//                     name="name"
//                     value={name}
//                     onChange={ (e) => setName(e.target.value)}
//                     />
//                 </div>

//                 {/* <div className="form-group">
//                     <label htmlFor="">
//                         Last Name
//                     </label>
//                     <input type="text"
//                     className="form-control"
//                     placeholder="Last Name"
//                     name="lastName"
//                     value={lastName}
//                     onChange = { (e) => setLastName(e.target.value)}
//                     />
//                 </div> */}

//                 <div className="form-group">
//                     <label htmlFor="">
//                         Email
//                     </label>
//                     <input type="email"
//                     className="form-control"
//                     placeholder="Email"
//                     name="email"
//                     id='email'
//                     value={email}
//                     onChange ={ (e) => setEmail (e.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="">
//                         Password
//                     </label>
//                     <input type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     name="password"
//                     value={password}
//                     onChange={ (e) => setPassword(e.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="">
//                         Confirm Password
//                     </label>
//                     <input type="password"
//                     className="form-control"
//                     placeholder="Confirm Password"
//                     name="confirmPassword"
//                     value={confirmPassword}
//                     onChange={ (e) => setConfirmPassword(e.target.value)}
//                     />
//                 </div>
                
//                 <button className="btn btn-primary btn-block"
//                 onClick={handleSubmit}>
//                     Sign Up
//                 </button>