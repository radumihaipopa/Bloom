import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import '../../App.css';
import './Categories.css';
import Api from '../../api/Api';

class Categories extends React.Component {
    componentDidMount() {
        this.props.dispatch(Api.getCategories());
    }

    render() {
        const { error, pending, genres } = this.props;

        if (error) {
            return <div>Eroare! {error.message}</div>;
        }

        if (pending) {
            return <div>Se încarcă...</div>;
        }

        const genresList = Object.values(genres);

        if (genresList) {
            return (
                <>
                    <div>
                        <h2 className='title'>Categorii</h2>
                        <div className="movie-list-container">
                        {genresList.map((genreslist, index) =>
                            <ol key={index} className="list-item">
                                {genreslist.map((genre) =>
                                    <li key={genre.id}>
                                        <Link to={{pathname:`/categories/movies/${genre.id}`,
                                        genreId: genre.id, genreName: genre.name}}>{genre.name}</Link>
                                    </li>
                                )}
                            </ol>
                        )}
                        </div >
                        <hr />
                    </div >
                </>
            );
        }
    }
}

const mapStateToProps = state => ({
    error: state.category.error,
    genres: state.category.genres,
    pending: state.category.pending,
})

export default connect(
    mapStateToProps
)(Categories);