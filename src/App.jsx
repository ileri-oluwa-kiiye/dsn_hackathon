import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import GetInvolved from './components/Getinv';
import Contact from './components/Contact';
function App() {
  const [page, setPage] = useState('home');

  let PageComponent;
  if (page === 'home') PageComponent = <Home onNavigate={setPage} />;
  else if (page === 'about') PageComponent = <About onNavigate={setPage} />;
  else if (page === 'getinvolved') PageComponent = <GetInvolved onNavigate={setPage} />;
  else if (page === 'contact') PageComponent = <Contact onNavigate={setPage} />;

  return (
    <>
      {PageComponent}
    </>
  );
}

export default App;
