import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import CarListPage from './pages/CarListPage'
import CarPage from './pages/CarPage'



export default function App() {
  return (
    <Router>
        <header className="App-header">
            <div className="container">
                <div className="App-navbarLogo">
                    <Link className="App-navbarLogo-link" to="/">CarTrawler Car List</Link>
                </div>
            </div>
        </header>
      <div>        
          <Switch>
            <Route path="/car/:id">
              <CarPage/>
            </Route>
            <Route path="/">
              <CarListPage />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}