import React from 'react'
import './App.css';
import Header from './components/header/header.jsx'
function App() {
  return (
    <div className={'wrapper'} contentEditable={false}>
      <Header />
      <div className={'wrapper'}>Hello World!!!!!!!!</div>
      
    </div>
  );
}

export default App;
