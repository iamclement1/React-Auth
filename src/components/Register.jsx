import { useState } from 'react'
import axios from 'axios'

export const Register = () => {

    // function handleChange (event) {
    //     alert(event.target.value);
    // }

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        // alert('Your info has been received')
    }

    axios.post('http://localhost:3000/register?', handleSubmit).then(
        response => {
            alert(response)
        }
    ).catch(
        error => {
            console.log(error)
        }
    ) 


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h3>
                    Sign Up
                </h3>

                <div className="form-group">
                    <label htmlFor="">
                        First Name
                    </label>
                    <input type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={ e => setFirstName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Last Name
                    </label>
                    <input type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange = { e => setLastName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Email
                    </label>
                    <input type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange ={ e => setEmail (e.target.value)}
                    />
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
                    onChange={ e => setPassword(e.target.value)}
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
                    onChange={ e => setConfirmPassword(e.target.value)}
                    />
                </div>
                
                <button className="btn btn-primary btn-block">
                    Sign Up
                </button>
            </form>
        </div>
    )
}