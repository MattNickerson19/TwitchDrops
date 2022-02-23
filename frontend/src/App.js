import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import { FaqPage } from "./components/FaqPage"; 
import { PreviousDrops } from "./components/PreviousDrops";
import FutureDrops from './components/FutureDrops'



function App() {
  const [drops, setDrops] = useState(null);

  useEffect(async () => {
    const promise = await fetch('/api/drops');
    const data = await promise.json();
    setDrops(data);
  }, []);

  const [faqs, setFaqs] = useState(null);

  useEffect(async () => {
    const promise = await fetch('/api/faq');
    const data = await promise.json();
    setFaqs(data);
  }, []);

  if(drops == null) return null;
  if(faqs == null) return null;
  
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<LandingPage drops={drops} />} />
          <Route path="/FAQS" element={<FaqPage faqs={faqs}/>} />
          <Route path="/PreviousDrops" element={<PreviousDrops drops={drops} />} />
          <Route path="/FutureDrops" element={<FutureDrops drops={drops} />} />
        </Routes>
      </div>
    </>  
  )
}

export default App;
  