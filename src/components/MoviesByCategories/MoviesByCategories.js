import React from 'react';
import { connect } from 'react-redux';

import Api from "../../api/Api";
import MovieCard from "../MovieCard/MovieCard";
import '../../App.css'

class MoviesByCategories extends React.Component {
    componentDidMount() {
        const { genreId } = this.props.match.params;
        console.log(genreId);
        this.props.dispatch(Api.getMoviesByCategories(genreId));
    }

    render() {
        const { error, pending, movies } = this.props;
        const genreName = this.props.location.genreName

        if (error) {
            return <div>Eroare! {error.message}</div>;
        }

        if (pending) {
            return <div>Se încarcă...</div>;
        }

        const movieList = Object.values(movies);

        if (movieList) {
            return (
                <div>
                    <h2 className='title'>{genreName}</h2>
                        <div className="movie-list-container">
                            {movieList.map((results, index) =>
                                <ol key={index} className="movie-list-grid">
                                    {
                                        Object.values(results).map(movie =>
                                            <li key={movie.id}>
                                                <MovieCard
                                                    movie={movie}
                                                />
                                            </li>
                                        )}
                                </ol>
                            )}
                        </div>
                </div>

            );
        }
    }
}

const mapStateToProps = state => ({
    error: state.moviesCategory.error,
    movies: state.moviesCategory.movies,
    pending: state.moviesCategory.pending,
})

export default connect(
    mapStateToProps
)(MoviesByCategories);
