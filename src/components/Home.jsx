import axios from "axios"
import { useEffect } from "react"

export const Home = () => {

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('token'),
            }
        }

        axios.get('https://itusell.herokuapp.com/api/users/register', config).then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        )
    })


    return (
        <div>
            <h2>You're not logged in</h2>
        </div>
    )
}