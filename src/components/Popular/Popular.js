import React from 'react';

import MovieCard from '../MovieCard/MovieCard';
import '../../App.css';

class Popular extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            <div className="movie-list-container">
                <ol className="movie-list-grid">
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <MovieCard
                                movie={movie}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Popular;