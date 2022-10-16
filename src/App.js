import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header';
import MovieList from './Components/MovieList/movielist';
import Home from './Pages/Home/home'
import Movie from './Pages/MovieDetail/moviedetail';
import Login from './Pages/Login/login';
import {ImSad} from 'react-icons/im';
import Register from './Pages/Register/register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<Movie/>}></Route>
        <Route path='movies/:type' element={<MovieList/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='/*'  element={<h1 style={{fontSize: "5rem", marginTop:"3rem"}}><ImSad/>Error <br/> Page Not Found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
