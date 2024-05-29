// src/pages/MoviePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_TMDB_API_KEY`);
            setMovie(request.data);
        }
        fetchMovie();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="moviePage">
            <div className="moviePage__container">
                <img
                    className="moviePage__poster"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="moviePage__info">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
