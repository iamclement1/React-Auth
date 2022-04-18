

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <a href="" className="navbar-brand" 
                    data-toggle="collapse"
                    data-target="#nav">
                        Home
                    </a>
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="" className="nav-link" 
                                    data-toggle="collapse">
                                        Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link" 
                                    data-toggle="collapse">
                                        Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}