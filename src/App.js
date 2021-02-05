import React from 'react'
import './App.css';
import Header from './components/header/header.jsx'
import Card from './components/card/card.js'
import MainPage from './pages/MainPage.jsx'

function App() {
  return (
    <div className={'wrapper'} contentEditable={false}>
      <Header />
      <div className={'container'}>
      <MainPage/>
      </div>
      
    </div>
  );
}

export default App;
