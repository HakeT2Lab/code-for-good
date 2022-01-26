import "./App.css";

import Home from "./pages/home/Home";
import Donation from "./pages/donation/Donation";
import About from "./pages/about/About";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
  
function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/about' element={<About />} /> 
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>;
}

export default App;
