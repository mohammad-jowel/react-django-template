import React, { useState, useEffect } from 'react';
import axios from "axios";

const App =  () => {
  const [movies, setMovies] = useState({});
  const [movie, setMovie] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios.get('http://localhost:8000/api/')
      .then(response => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const addMovie = () => {
    axios.post('http://localhost:8000/api/add', {
      name: movie,
    })
    .then((response) => {
      setMovie('');
      getMovies();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
      <div>
        <h1>My movies list</h1>
        <ul>
          {movies.length > 0 && movies.map((movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
          {!movies.length && <p>Loading movies...</p>}
        </ul>
        <input value={movie} type='text' onChange={(e) => setMovie(e.target.value)} />
        <button onClick={addMovie}>Add</button>
      </div>
    );    
}

export default App
