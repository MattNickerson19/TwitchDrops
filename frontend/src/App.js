import './App.css';
import { useState, useEffect } from 'react';
import { DropContainer } from "./components/DropContainer";
import { Drop } from "./components/Drop";

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
  
  return 
}

export default App;
  