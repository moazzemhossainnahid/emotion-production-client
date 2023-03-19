import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='blogs' element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
