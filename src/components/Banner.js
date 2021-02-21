import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';
import axios from './../axios';
import requests from './../Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);


  const truncate = (str, nChars) => {
    return str?.length > nChars ? str.substr(0, nChars - 1) + '...' : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}>
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">My List</button>
          <button className="banner-button">Play</button>
          <h1 className="banner-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
