import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './Pages/Home';

import Footer from './Pages/Footer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
