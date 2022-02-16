import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route, Link } from "react-router-dom";
import { DropContainer } from "./components/DropContainer";
import { Drop } from "./components/Drop";
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import { FaqPage } from "./components/FaqPage"; 


function App() {
  const [drops, setDrops] = useState([]);

  useEffect(async () => {
    const promise = await fetch('/api/drops');
    const data = await promise.json();
    setDrops(data);
  }, []);

  const [faqs, setFaqs] = useState([]);

  useEffect(async () => {
    const promise = await fetch('/api/faq');
    const data = await promise.json();
    setFaqs(data);
  }, []);
  
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<LandingPage drops={drops} />} />
          <Route path="/FAQS" element={<FaqPage faqs={faqs}/>} />
{/*
          <Route path="/PreviousDrops" element={<PreviousDrops drops={drops} />} />
          <Route path="/FutreDrops" element={<FutureDrops drops={drops} />} />
          <Route path="/ConnectAccounts" element={<ConnectAccounts />} />
          <Route path="/ProjectWinter" element={<ProjectWinter />} /> */}
        </Routes>
      </div>
    </>  

  )
}

export default App;
  