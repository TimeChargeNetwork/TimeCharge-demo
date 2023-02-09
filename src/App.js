import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import NavBar from "./components/NavBar";
import AboutView from "./views/AboutView";
import MediaView from "./views/MediaView";
import SitesView from "./views/SitesView";
import InvestView from "./views/InvestView";
import ContactView from "./views/ContactView";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/media" element={<MediaView />} />
          <Route path="/sites" element={<SitesView />} />
          <Route path="/invest" element={<InvestView />} />
          <Route path="/connect" element={<ContactView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
