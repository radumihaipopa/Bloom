import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import Api from './api/Api';
import Header from './components/Header/Header';
import Popular from './components/Popular/Popular';
import Categories from './components/Categories/Categories';
import Carousel from './components/Carousel/Carousel';
import MovieCard from './components/MovieCard/MovieCard';
import MoviesByCategories from './components/MoviesByCategories/MoviesByCategories';
import AssetDetails from './components/AssetDetails/AssetDetails';
import NotFound from './components/NotFound/NotFound';

//import { getPopularDataFailure, getPopularData, getPopularDataSuccess } from './store/reducers/PopularReducer';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(Api.getPopularVideos());
  }

  render() {
    const { error, pending, data } = this.props;

    if (error) {
      return <div>Eroare! {error.message}</div>;
    }

    if (pending) {
      return <div>Se încarcă...</div>;
    }

    if (data) {
      return (
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/">
              <Carousel>
                {data.map(movie => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                  />
                ))}
              </Carousel>
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route path={`/categories/movies/:genreId`} component={MoviesByCategories}>
            </Route>
            <Route path={`/asset/:movieId`} component={AssetDetails}>
            </Route>
            <Route exact path="/popular">
              <Popular movies={data} />
            </Route>
            <Route path="*">
              <NotFound movies={data.slice(1).slice(-3)} component={NotFound}/>
            </Route>
          </Switch>
        </div>
      );
    }


  }
}

const mapStateToProps = state => ({
  error: state.popular.error,
  data: state.popular.data,
  pending: state.popular.pending
})

/*const mapDispatchToProps = dispatch => bindActionCreators({
  popularMovies: Api.getPopularVideos 
}, dispatch)*/

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(App);
