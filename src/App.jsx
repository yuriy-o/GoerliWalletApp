import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <PacmanLoader color="#1f1f1f" size={40} />
        </div>
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
