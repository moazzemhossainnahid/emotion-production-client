import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
<<<<<<< HEAD
import Navbar from './Pages/Shared/Navbar';
=======
import Services from './Pages/Services/Services';
>>>>>>> 811c9a758fad4961f73f122c41aba268e836b3bd

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
=======
        <Route path='services' element={<Services />} />
        <Route path='blogs' element={<Blogs />} />
>>>>>>> 811c9a758fad4961f73f122c41aba268e836b3bd
      </Routes>
    </div>
  );
}

export default App;
