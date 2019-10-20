![alt text](https://github.com/radumihaipopa/Bloom/blob/master/public/logo.PNG)

This project is a simple front end VOD. It was created with React and Redux for learning purpose. It uses The MovieDB Api to fetch movies and display details.

# Test yourself

Follow these steps

* `git clone https://github.com/radumihaipopa/VOD-App.git`
* `npm install`
* `npm run start`

The application will open your default browser on https://localhost:3000/

# About the application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Some 3rd party library were added:

* `react-router-dom` found [here](https://github.com/ReactTraining/react-router);
* `react-items-carousel` found [here](https://github.com/bitriddler/react-items-carousel);
* `react-redux` found [here](https://react-redux.js.org/);
* `react-modal-video` found [here](https://github.com/appleple/react-modal-video).

# Features

* The application uses an [MovieDB like API](https://www.themoviedb.org/documentation/api) to fill the application with real data;
* The application uses Redux for managing each API states `Loading`, `Data` and `Error`;
* The application has 3 navigation routes `Home`, `Categories`, `Popular`;
* `Movie Cards` are clickable and open details about movies. There is also a watch trailer button that opens a modal with the youtube video trailer of the movie.

