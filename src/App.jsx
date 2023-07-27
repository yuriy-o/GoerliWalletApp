import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

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
        <Loader />
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
