import React from 'react'
import './App.css';
import Header from './components/header/header.jsx'
import MainPage from './pages/MainPage.jsx'
import Basket from './components/basket/basketPages'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div>
      
      <Header />
      <div>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/basket'>
            <Basket />
          </Route>
          <Route exact path='/category'>
            <h1>Category</h1> 
          </Route>
          {/* <Route exact path={'*'}>
            <Redirect to={'/'} />
          </Route> */}
          <Route path={'*'}>
            <h1>Poshel nahui, pisat uchis dolbaeb</h1>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
