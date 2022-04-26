import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import axios from 'axios'


export const Register = () => {

    const navigate = useNavigate('')
    
    



    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');


    // const [ fullNameError, setFullNameError ] = useState({});
    // const [ emailError, setEmailError ] = useState({});


    const handleSubmit = (event) => {
        event.preventDefault()
        // const isValid = formValidation()
        const data = {
            name: name,
            email: email,
            password: password,
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

   
    // const formValidation = () => {
    //     const fullNameError = {};
    //     const emailError = {};
    //     let isValid = true;

    //     if(name.trim().length < 5) {
    //         fullNameError.fullNameShort = 'full name is too short';
    //         isValid = false;
    //     }

    //     if(name.trim().length > 30 ){
    //         fullNameError.fullNameLong = 'full name is too long';
    //         isValid = false;
    //     }

    //     if(!email.includes('@')) {
    //         emailError.email = 'email must have @'
    //         isValid = false;
    //     }

    //     setFullNameError(fullNameError);
    //     setEmailError(emailError);
    //     return isValid;
    // }




    return (
        <div>
            <form>
                <h3>
                    Sign Up
                </h3>

                <div className="form-group">
                    <label htmlFor="">
                        Full Name
                    </label>
                    <input type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="name"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                    />

                    {/* {Object.keys(fullNameError).map((key)=> {
                        return <div style={{
                            color: 'red'
                        }}>
                            {fullNameError[key]}
                        </div>
                    })} */}
                </div>

                {/* <div className="form-group">
                    <label htmlFor="">
                        Last Name
                    </label>
                    <input type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange = { (e) => setLastName(e.target.value)}
                    />
                </div> */}

                <div className="form-group">
                    <label htmlFor="">
                        Email
                    </label>
                    <input type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange ={ (e) => setEmail (e.target.value)}
                    />
                    {/* {Object.keys(emailError).map((key)=> {
                        return <div style={{
                            color: 'red'
                        }}>
                            {emailError[key]}
                        </div>
                    })} */}
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Password
                    </label>
                    <input type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Confirm Password
                    </label>
                    <input type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={ (e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                
                <button className="btn btn-primary btn-block"
                onClick={handleSubmit}>
                    Sign Up
                </button>
            </form>
        </div>
    )
}