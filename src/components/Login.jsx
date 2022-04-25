import { useState } from 'react'
import axios from 'axios'

export const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        
        // alert('Your info has been received')

        axios.post('https://itusell.herokuapp.com/api/users/login', data)
        .then( response => {
            console.log(response.data)
            
        })
        .catch ( error => {
            console.log(error)
        })
    }

    // "eyJhbGciOiJIUzI1NiJ9.NjI2NjdmNzRmM2ZmYzYwMDE3OWExOWJl.j2L6JQlQFL1i6Xz5cI9fB8HASPeINgmzjvOKbyn_l_s"






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