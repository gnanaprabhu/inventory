import { BrowserRouter as Router } from 'react-router-dom';
import { MainMenu } from './organisms/mainmenu';
import { MainRouter } from './router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
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
