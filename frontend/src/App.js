import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route, Link } from "react-router-dom";
import { DropContainer } from "./components/DropContainer";
import { Drop } from "./components/Drop";
import { FaqContainer } from "./components/FaqContainer"; 

function App() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    fetch('add api here')
      .then((response) => response.json())
      .then(setDrops)
  }, []);

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('add faq api here')
      .then((response) => response.json())
      .then(setFaqs)
  }, []);
  
  return (

    <>
      <div className='App'>
        /*
          Only using nav tags for place holder. Can implement a proper Nav Bar when design is finalized.
          Could also include our template here as well since it will carry across all of the pages?
        */
        <nav>
            <Link to="/">Home</Link>
            <Link to="/FAQS">FAQS</Link>
            <Link to="/PreviousDrops">Previous Drops</Link>
            <Link to="/FutureDrops">Future Drops</Link>
            <Link to="/ProjectWinter">Project Winter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage drops={drops} />} />
          <Route path="/FAQS" element={<FaqContainer faqs={faqs}/>} />
          <Route path="/PreviousDrops" element={<PreviousDrops drops={drops} />} />
          <Route path="/FutreDrops" element={<FutureDrops drops={drops} />} />
          <Route path="/ConnectAccounts" element={<ConnectAccounts />} />
          <Route path="/ProjectWinter" element={<ProjectWinter />} />
        </Routes>
      </div>
    </>  

  )
}

export default App;
  