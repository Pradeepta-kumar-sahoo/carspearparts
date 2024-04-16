import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer/Footer";
import BrandButtonGroup from "./CarBrand/BrandButtonGroup";
import Kia from "./Kiaparts/Kia";
import Suzikiparts from "./Kiaparts/Suzikiparts/Suzikiparts";
import Hundai from "./Kiaparts/Hundai/Hundai";
import Mahendra from "./Mahendra/Mahendra";

function App() {
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleGoToProductDetail = () => {
    setShowProductDetail(true);
  };

  return (
    <>
      <div className="mx-40">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/KiaSonet" element={<Kia />} />
            <Route path="/Suziki" element={<Suzikiparts />} />
            <Route path="/Mahendra" element={<Mahendra/>}/>
            <Route path = "/Hundai" element={<Hundai/>}/>
            {/* Add more routes as needed */}
          </Routes>
          
          {/* Render the button group conditionally */}
          {!showProductDetail && (
            <BrandButtonGroup handleGoToProductDetail={handleGoToProductDetail} />
          )}
           
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
