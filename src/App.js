import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Introduction from './Pages/about/introduction';
import Home from './Pages/Home';
import Projects from './Pages/projects/Projects';
import NavLinks from './Pages/NavLinks';
function App() {
  return (
    <Router>
    <NavLinks/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<Introduction/>}/>      
        <Route path = "/projects" element = {<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
