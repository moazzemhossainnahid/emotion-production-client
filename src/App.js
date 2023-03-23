import { Route, Routes } from 'react-router-dom';
import './App.css';
import Company from './Components/Home/WhyEmotion/Company';
import Owner from './Components/Home/WhyEmotion/Owner';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Accessories from './Pages/Services/Service/Accessories';
import Animation from './Pages/Services/Service/Animation';
import ContentShotting from './Pages/Services/Service/ContentShotting';
import DegitalBrand from './Pages/Services/Service/DegitalBrand';
import Packaging from './Pages/Services/Service/Packaging';
import Prototype from './Pages/Services/Service/Prototype';
import UiUxService from './Pages/Services/Service/UiUxService';
import WebDesign from './Pages/Services/Service/WebDesign';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';

import Navbar from './Pages/Shared/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Company />} />
          <Route path='company' element={<Company />} />
          <Route path='owner' element={<Owner />} />
        </Route>
        <Route path='service/digitalbrand' element={<DegitalBrand />} />
        <Route path='service/webdesign' element={<WebDesign />} />
        <Route path='service/packaging' element={<Packaging />} />
        <Route path='service/animation' element={<Animation />} />
        <Route path='service/contantshotting' element={<ContentShotting />} />
        <Route path='service/uiuxdesign' element={<UiUxService />} />
        <Route path='service/prototype' element={<Prototype />} />
        <Route path='service/accessories' element={<Accessories />} />

        <Route path='blogs' element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
