import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainRouter } from './router';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <MainRouter/>
      </Router>
    </div>
  );
}

export default App;
