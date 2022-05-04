import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <NavLink to="/" className="navbar-brand" 
                    data-toggle="collapse"
                    data-target="#nav">
                        Home
                    </NavLink>
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" 
                                    data-toggle="collapse">
                                        Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link" 
                                    data-toggle="collapse">
                                        Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}