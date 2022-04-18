import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
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
      <div className="auth-wrapper">
          <div className="auth-inner">
            <h2>You're not logged in</h2>
          </div>
        </div>
    </div>
  );
}

export default App;
