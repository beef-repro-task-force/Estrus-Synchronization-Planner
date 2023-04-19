import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './style/App.css';

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
