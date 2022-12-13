import Nav from "./components/nav";
import Main from "./components/main";
import Home from "./components/home"
import Mskill from "./components/myskill"
import Mproject from "./components/myproject"
import LeftRightButton from "./components/left-right-button.js"
import AboutNav from "./components/AboutNav"
import { Routes, Route } from "react-router-dom";
import './components/css/index.css';
function App() {
  return (
    <div>
      <AboutNav/>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="Mskill" element={<Mskill/>}/>
        <Route path="Mproject" element={<Mproject/>}/>
      </Routes>
      <LeftRightButton/>
    </div>
  );
}

export default App;
