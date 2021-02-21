import React, { useEffect, useState } from 'react';
import './../styles/Row.css';
import axios from './../axios';
import requests from '../Requests';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get(fetchUrl);
    //   setMovies(request.data.results);
    //   return request;
    // }
    const fetchData = () => {
      axios
      .get(fetchUrl)
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
