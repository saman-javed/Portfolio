import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FeaturedPodcasts from "./Components/FeaturedPodcasts/FeaturedPodcasts";
// import Navbar from "./Components/NavBar/NavBar";
// import HeroSection from "./Components/HeroSection/HeroSection";
import HomePg from "./Pages/HomePg";
// import BannerSection from "./Components/BannerSection/BannerSection";
// import BlogSection from "./Components/BlogSection/BlogSection";
// import ServiceSlider from "./Components/ServiceSlider/ServiceSlider";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePg />} />
          {/* <Route path="/navbar" element={<Navbar />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/podcasts" element={<FeaturedPodcasts />} />
          <Route path="/banner" element={<BannerSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/services" element={<ServiceSlider />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
