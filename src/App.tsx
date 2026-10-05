import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import ServizioPage from './pages/ServizioPage';
import DecessoPage from './pages/DecessoPage';
import NecrologiPage from './pages/NecrologiPage';
import NecrologioDetailPage from './pages/NecrologioDetailPage';
import ContattiPage from './pages/ContattiPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi/:slug" element={<ServizioPage />} />
            <Route path="/decesso/:slug" element={<DecessoPage />} />
            <Route path="/necrologi" element={<NecrologiPage />} />
            <Route path="/necrologi/:comune/:slug" element={<NecrologioDetailPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
          </Routes>
        </div>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
