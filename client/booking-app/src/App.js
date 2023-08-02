import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Gallery } from './components/Gallery/Gallery';

function App() {
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);

  return (
    <div className={`body ${isHomePage ? 'home-background' : 'gallery-background'}`}>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
