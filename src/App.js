import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Navbar from './components/Navbar';

function App() {

  const [location, setLocation] = useState('');
  const [search, setSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(true);
  }
  return (
    <div className="App">
      <Navbar location={location} handleSearch={handleSearch} setLocation={setLocation}/>
      {search && <WeatherCard city={location}/>}
    </div>
  );
}

export default App;
