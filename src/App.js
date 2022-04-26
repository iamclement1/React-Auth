import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';



function App() {
  return (
    <Router >
    <div className="App">
      <Navbar />
      <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/"  element={ <Home />} />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
            </Routes>
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
