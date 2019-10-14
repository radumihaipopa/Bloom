import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

export default function VOD() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/moviesByCategory">Movies By Category</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/bla">Not Found probably </Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/moviesByCategory">
            <MoviesByCategory />
          </Route>
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Categories() {
  return (
    <div>
      <h2>Categories</h2>
    </div>
  );
}

function Popular() {
  return (
    <div>
      <h2>Popular</h2>
    </div>
  );
}

function MoviesByCategory() {
  return (
    <div>
      <h2>Movies by Category</h2>
    </div>
  );
}

function NotFound() {
  let location = useLocation();

  return (
    <div>
      <h3>
        Error 404: <code>{location.pathname}</code> not found.
      </h3>
    </div>
  );
}
