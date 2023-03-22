import { Route, Routes } from 'react-router-dom';
import './App.css';
import Company from './Components/Home/WhyEmotion/Company';
import Owner from './Components/Home/WhyEmotion/Owner';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Navbar from './Pages/Shared/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Company/>} />
          <Route path='company' element={<Company/>} />
          <Route path='owner' element={<Owner/>} />
        </Route>
        <Route path='services' element={<Services />} />
        <Route path='blogs' element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
