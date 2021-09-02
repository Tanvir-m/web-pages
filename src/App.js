import './App.css';
import Home from '../src/components/Restaurant/Home/Home';
import { HashRouter as Router, Route } from 'react-router-dom';
import Travel from './components/Pages/Travel';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Travel />
        </Route>
        <Route exact path="/food">
          <Home />
        </Route>
      </Router>
    </>
  );
}

export default App;
