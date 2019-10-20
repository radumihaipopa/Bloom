import React from 'react';
import { connect } from 'react-redux';
import ModalVideo from 'react-modal-video'

import Api from "../../api/Api";
import './AssetDetails.css';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class AssetDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        this.props.dispatch(Api.getAssetById(movieId));
        this.props.dispatch(Api.getVideoById(movieId));
    }

    render() {
        const { error, pending, movie, video, loading, err } = this.props;
        const imageUrl = 'https://image.tmdb.org/t/p/w500';

        if (error || err) {
            return <div>Eroare! {error.message}</div>;
        }

        if (pending || loading) {
            return <div>Se încarcă...</div>;
        }

        console.log(video);
        if (movie) {
            return (
                <div className="main-container">
                    <div className="poster-container">
                        <img src={`${imageUrl}/${movie.poster_path}`}
                            alt="Poster" />
                    </div>
                    <div className="desc-container">
                        <h4 className="desc-item">
                            <div className="movie-title">{movie.title} </div>
                        </h4>
                        <p className="desc-item">
                            <b className="desc-title">Rating: </b>
                            {movie.vote_average ? movie.vote_average : `N/A`}
                        </p>
                        <p className="desc-item">
                            <b className="desc-title">Metraj: </b>
                            {movie.runtime ? `${movie.runtime} minute` : `N/A`}
                        </p>
                        <p className="desc-item">
                            <b className="desc-title">Data lansării: </b>
                            {movie.release_date ? movie.release_date.split('-')[0] : `N/A`}
                        </p>
                        <p className="desc-item">
                            <b className="desc-title">Descriere: </b>
                            {movie.overview ? movie.overview : `Acest film nu are descriere.`}
                        </p>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='zAGVQLHvwOY'
                            onClose={() => this.setState({ isOpen: false })} />
                        <button className="button" onClick={this.openModal}>Vizionează trailer</button>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    error: state.asset.error,
    movie: state.asset.movie,
    pending: state.asset.pending,
    err: state.video.error,
    video: state.video.movie,
    loading: state.video.pending
})

export default connect(
    mapStateToProps
)(AssetDetails);