import React, { FormEvent, useEffect, useState } from 'react';
import './App.css';
import MovieComponent from './components/MovieComponent';
import { IMovie } from './IMovie';

function App() {
 const [movies,setMovies] = useState<IMovie[]>([]);
const [moviesSearch,setMoviesSearch] = useState('');
const searchForMovies = async(query:string):Promise<IMovie[]>=>{
  const result = await fetch(`http://localhost:8080/api/movies/${query}`);
  return await result.json();
}
const search = (event:FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const input = form.querySelector('#searchText') as HTMLInputElement;
  setMoviesSearch(input.value);
}
useEffect(()=>{
  (
    async() => {
      const query = encodeURIComponent(moviesSearch);
      if(query){
      const response = await searchForMovies(query);
      setMovies(response);
      }
    }
  )();
},[moviesSearch])
  return (
    <div className="App">
      <form className='searchForm' onSubmit={event=>search(event)}>
        <input id="searchText" type="text"></input>
        <button>Search</button>
      </form>
      <div className='movie-container'>{
        movies.length!=0 &&  <MovieComponent movie={movies[0]}></MovieComponent>
      }
      </div>
    </div>
  );
}

export default App;
