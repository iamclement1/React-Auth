import { toast } from 'react-toastify'

toast.configure()

function Toastify () {

    const notify = () => {
        toast('welcome to dashboard')
    }
    return (
        <div className="p-3 text-dark">
            
            <button onclick={notify}>Click me!</button>
        </div>

    )
}

export default Toastify 