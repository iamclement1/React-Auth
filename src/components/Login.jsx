import { useState } from 'react'
import axios from 'axios'

export const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        // alert('Your info has been received')
    }

    axios.post('http://localhost:3000/login?', handleSubmit).then(
        response => {
            console.log(response)
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
                    Login
                </h3>

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

                
                <button className="btn btn-primary btn-block">
                    Login
                </button>
            </form>
        </div>
    )
}