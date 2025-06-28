import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import AllRecipesPage from "./pages/AllRecipesPage";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import GuidePage from "./pages/GuidePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPage from "./pages/PrivacyPage";
import "./index.css";
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/recipes" element={<AllRecipesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
