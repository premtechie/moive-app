import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Header from './Components/Header';


function App() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const api = axios.create({ baseURL: BASE_URL });
  const api_key = "ff21b822223b826772e86345f0833060";
  const handleFetch = () =>{
    axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}`).then(response =>console.log(response))

  }
  handleFetch()
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
