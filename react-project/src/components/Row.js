// src/components/Row.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import './Row.css';

import requests from '../requests';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requestUrl = `https://api.themoviedb.org/3${fetchUrl}`;
            console.log("Fetching URL:", requestUrl); // Log da URL final
            try {
                const request = await axios.get(requestUrl);
                console.log("Response:", request); // Log da resposta da API
                setMovies(request.data.results);
            } catch (error) {
                console.error("Error fetching data:", error); // Log do erro
            }
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;

// const base_url = "https://image.tmdb.org/t/p/original/";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//     const [movies, setMovies] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
//             setMovies(request.data.results);
//             return request;
//         }
//         fetchData();
//     }, [fetchUrl]);

//     const handleClick = (id) => {
//         navigate(`/movie/${id}`);
//     };

//     return (
//         <div className="row">
//             <h2>{title}</h2>
//             <div className="row__posters">
//                 {movies.map(movie => (
//                     <img
//                         key={movie.id}
//                         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//                         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//                         alt={movie.name}
//                         onClick={() => handleClick(movie.id)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Row;
