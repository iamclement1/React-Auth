import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { SignUpForm } from './components/Formik/SignUpForm';
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react';
import ThirdPartyEmailPassword, { Github, Google, Apple } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import Session from 'supertokens-auth-react/recipe/session';


SuperTokens.init({
  appInfo: {
    appName: 'react-auth',
    apiDomain: 'http://localhost:3001',
    websiteDomain: 'http://localhost:3000'
  },
  recipeList:  [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Apple.init(),
        ],
      },
    }),
    Session.init()
  ]
})



function App() {
  return (
    <Router >
    <div className="App">
      <Navbar />
      <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              { getSuperTokensRoutesForReactRouterDom(require('react-router-dom'))}
              <Route path="/"  element={ <Home />} />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/formik" element={ <SignUpForm /> } />
            </Routes>
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
