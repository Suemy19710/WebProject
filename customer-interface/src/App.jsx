import React from 'react';
import Header from './components/Header';
import TopNavigation from './components/TopNavigation';
// import { BrowserRouter } from 'react-router-dom';


import './styles/Header.scss';
import './styles/TopNavigation.scss';

function App() {
  return (
    <>
      <Header/>
      <TopNavigation/>
    </>
  )
}
export default App;
