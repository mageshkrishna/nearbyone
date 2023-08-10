
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Loginuser from './componentsuser/Loginuser/Loginuser';
import Logincustomer from './componentcustomer/logincus/Logincustomer';
import CustomerdashBoard from './componentcustomer/Customerdashboard/CustomerdashBoard';
import NavbarUser from './componentsuser/Navbar/NavbarUser';
import Createproduct from './componentsuser/createproduct/Createproduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Productlayoutuser from './componentsuser/productlayoutuser/Productlayoutuser';

function App() {
  return (
    <div>
      <ToastContainer />
     <BrowserRouter>
     <Routes>
      
      <Route path = "/" element={<Home/>}/>
      <Route path = "/Loginuser" element={<Loginuser/>}/>
      <Route path = "/Logincustomer" element={<Logincustomer/>}/>
      <Route path = "/Customerdashboard" element={<CustomerdashBoard/>}/>
      <Route path="/navbaruser" element={<NavbarUser/>} >
      <Route path = "Createproduct"  element={<Createproduct/>}/>
      <Route path ="productlayoutuser" element={<Productlayoutuser/>}/>
      </Route>
      

      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
