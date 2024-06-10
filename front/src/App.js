import 'bootstrap/dist/css/bootstrap.min.css';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Reserdata from './component/watch'
import Navbar from './component/Navbar';
import View from './component/View';



function App() {
  
  return (
    <BrowserRouter>
      <Navbar  /> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserdata" element={<Reserdata/>} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
