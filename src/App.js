// import logo from './logo.svg';
import './App.css';
import FormText from './components/formtext';
// import Maps from './components/maps';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Navbar from './components/navbar';
import Navbar1 from './components/navbar1';
// import { useJsApiLoader } from '@react-google-maps/api';
// import Signup from './components/signup';
import Partwith from './components/partwith';
import Fleets from './components/fleets'
import "@fontsource/baloo-bhai-2";
// import Mmaps from './components/map'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/loginform';
import About from './components/about';
import Future from './components/future';
// import Maps from './components/maps';

function App() {
  return (
     <>
     <Router>
     <div className="navbar11"><Navbar1/></div> 
       <div className="navbar"><Navbar /></div>
       
     {/* <div className="maps"></div>   */}
     
     <Routes>
      <Route  exact path= '/pw' element= { <div className="partwith"> <Partwith/> </div>}  > </Route>
      <Route exact path='/' element={<div className="formtext maps"><FormText/> <Fleets/> </div>  }></Route>
  
     <Route exact path='/signup' element= {<LoginPage/>} ></Route>
     <Route exact path='/aboutus' element={<About/>} >  </Route>
     {/* <Route exact path='/maps' element= {<Mmaps/>}> </Route> */}

     <Route exact path='/future' element={<Future/>} > </Route>


      </Routes>
  
    
    </Router>
    </>
  );
  
}

export default App;
