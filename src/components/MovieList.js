import MovieCard from "./MovieCard";
import MoviesObj from "../MoviesObj";
import React, { useState } from "react";
import Filter from "./Filter";

const MovieList = () => {
    const [movies, setMovies] = useState(MoviesObj);
    const [newMovie, setNewMovie] = useState('');

    const handleDelete = (key) => {
        const newMovies = movies.filter((_, n) => n !== key);
        setMovies(newMovies);
    }

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies([...movies, newMovie]);
    };

    function handleFilter(search) {
        let filteredMovie = movies.Filter((value) =>
            value.title.toLowerCase().includes(search.toLowerCase())
        );
        setMovies(filteredMovie);
    }

    return (
        <>
            <Filter handleFilter={handleFilter} />

            <form onSubmit={handleSubmit} className="my-form">
                <div className="input-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        value={newMovie.title || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        value={newMovie.description || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="posterUrl">PosterUrl</label>
                    <input
                        id="posterUrl"
                        value={newMovie.posterUrl || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="rating">Rating</label>
                    <input
                        id="rating"
                        value={newMovie.rating || ""}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Add A New Movie
                </button>
            </form>

            <div className="cont">
                {movies.map((movie, key) => (
                    <MovieCard
                        title={movie.title}
                        description={movie.description}
                        posterUrl={movie.posterUrl}
                        rating={movie.rating}
                        del={() => handleDelete(key)}
                    />
                ))}
            </div>
        </>

    );
};

export default MovieList;