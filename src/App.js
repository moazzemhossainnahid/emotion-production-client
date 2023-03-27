import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUS from './Components/AboutUS/AboutUS';
import Company from './Components/Home/WhyEmotion/Company';
import Owner from './Components/Home/WhyEmotion/Owner';
import Blogs from './Pages/Blogs/Blogs';
import SingleBlog from './Pages/Blogs/SingleBlog/SingleBlog';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Accessories from './Pages/Services/Service/Accessories';
import Animation from './Pages/Services/Service/Animation';
import ContentShotting from './Pages/Services/Service/ContentShotting';
import DigitalBrand from './Pages/Services/Service/DigitalBrand';
import Packaging from './Pages/Services/Service/Packaging';
import Prototype from './Pages/Services/Service/Prototype';
import UiUxService from './Pages/Services/Service/UiUxService';
import WebDesign from './Pages/Services/Service/WebDesign';
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
        <Route path='service/digitalbrand' element={<DigitalBrand />} />
        <Route path='service/webdesign' element={<WebDesign />} />
        <Route path='service/packaging' element={<Packaging />} />
        <Route path='service/animation' element={<Animation />} />
        <Route path='service/contantshotting' element={<ContentShotting />} />
        <Route path='service/uiuxdesign' element={<UiUxService />} />
        <Route path='service/prototype' element={<Prototype />} />
        <Route path='service/accessories' element={<Accessories />} />

        <Route path='aboutus' element={<AboutUS />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:id' element={<SingleBlog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
