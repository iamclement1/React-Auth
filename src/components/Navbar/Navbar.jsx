import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand" 
                    data-toggle="collapse"
                    data-target="#nav">
                        Home
                    </Link>
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" 
                                    data-toggle="collapse">
                                        Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link" 
                                    data-toggle="collapse">
                                        Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link to="/toast" className="nav-link"
                                data-toggle="collapse">
                                    Toastify
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}