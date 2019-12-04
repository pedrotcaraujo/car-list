import React from 'react';
import './App.css'
import Filter from './components/Filter';
import CarList from './components/CarList';



export default function App() {
  return (
    <div>
        <header className="App-header">
            <div className="container">
                <div className="App-navbarLogo">
                    <a className="App-navbarLogo-link" href="/" title="CarList">CarTrawler Car List</a>
                </div>
            </div>
        </header>
      <div>
        <Filter />
        <CarList />
      </div>
    </div>
  );
}
