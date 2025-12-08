import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <div className="bg-dark2 min-h-screen">
      <ScrollToTop />
      <Navbar />

      {/* Routing SPA */}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
