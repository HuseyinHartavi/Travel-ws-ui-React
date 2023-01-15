// import { Form } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import {Routes,Route} from "react-router-dom";
import About from './pages/About';
import TourPackage from './pages/TourPackage';
import DetailPackage from './pages/DetailPackage';
import DetailPackage2 from './pages/DetailPackage2';


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tour-package" element={<TourPackage/>}/>
      <Route 
      path="/tour-package/:tourPackageId" 
      element={<DetailPackage/>}/>
      <Route path="/tour-package/detail-rome" element={<DetailPackage2/>} />      
    </Routes>
      
    </>
  );
}

export default App;
