import { Route, Routes } from "react-router-dom";
import Navication from "./Components/Navication/Navication";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import Books from "./pages/Books/Books";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";

function App() {
  
  return (
    <>
    <Navication></Navication>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/book' element = {<Books></Books>}></Route>
        <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
        <Route path='/about' element = {<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element = {<ContactUs></ContactUs>}></Route>
        <Route path='/login' element = {<LogIn></LogIn>}></Route>
      </Routes>
    </>
  );
}

export default App;










