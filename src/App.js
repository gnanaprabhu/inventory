import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainMenu } from './organisms/mainmenu';
import { MainRouter } from './router';
import { Login } from './template/login/Login';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" render={props => <Login {...props}/>} />
        <header className="header">
          <div className="header-container">
              <div className="company-logo">win technologies</div>
            <div>
              <button type="button" className="login-button">
                  Login
              </button>
            </div>
          </div>
        </header>
        <div className="main-container">
          <div className="menu">
            <MainMenu/>
          </div>
          <div className="page-container">
            <MainRouter/>
          </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
