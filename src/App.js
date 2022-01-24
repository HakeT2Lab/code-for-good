import "./App.css";

import Home from "./pages/home/Home";
import Donation from "./pages/donation/Donation";
import About from "./pages/about/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/donation' element={<Donation />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>;
}

export default App;
