import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            email: email,
            password: password,
        }
    
        
        axios.post('login', data)
        .then( response => {
            console.log(response.data);
            localStorage.setItem(`token`, response.data.token);
            toast.success(`user logged in successfully`);
        })
        .catch ( error => {
            console.log(error)
            toast.error(`user log in failed`);
        })
    }

    toast.configure()



    return (
        <div>
            <form>
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
                    onChange ={ (e) => setEmail (e.target.value)}
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
                    onChange={ (e) => setPassword(e.target.value)}
                    />
                </div>

                
                <button className="btn btn-primary btn-block"
                onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    )
}