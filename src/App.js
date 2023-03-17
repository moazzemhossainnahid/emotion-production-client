import { Route, Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route path='/' element={<Home />} />
      </Router>
    </div>
  );
}

export default App;
