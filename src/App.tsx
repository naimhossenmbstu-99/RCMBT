import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import History from '@/pages/History';
import ExecutiveBoard from '@/pages/ExecutiveBoard';
import PreviousBoards from '@/pages/PreviousBoards';
import Projects from '@/pages/Projects';
import SdgImpact from '@/pages/SdgImpact';
import Gallery from '@/pages/Gallery';
import News from '@/pages/News';
import International from '@/pages/International';
import Join from '@/pages/Join';
import Contact from '@/pages/Contact';
import Admin from '@/pages/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/board" element={<ExecutiveBoard />} />
          <Route path="/previous-boards" element={<PreviousBoards />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sdg" element={<SdgImpact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/international" element={<International />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
