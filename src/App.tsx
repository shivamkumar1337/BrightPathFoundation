// import React from 'react';
import HomePage from './pages/HomePage';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/layout/Navigation';
import AboutPage from './pages/AboutPage';
import Footer from './components/layout/Footer';
import WorkPage from './pages/WorkPage';
import GalleryPage from './pages/GalleryPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/work/project/:slug" element={<ProjectPage />} />

      </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;