# Movie Browswe App

##### Movie borwser is a React Native application built with Expo and TypeScript that allows users to browse movies from different categories (Now Playing, Popular, Top Rated, Upcoming) provided by the TMDB API. 
##### Users can search for movies and view detailed information about each movie.

## Features

- **Tabbed Interface**: Switch between different movie categories (Now Playing, Popular, Top Rated, Upcoming).
- **Movie List**: Display a list of movies with posters, titles, release dates, and average ratings.
- **Detailed View**: On tapping a movie item, navigate to a detailed view showing a larger movie poster, title, release date, average rating, and overview/description.
- **Search Functionality**: Search for movies across all categories.

## Screenshots

Include screenshots of your app here.

## How to run the project ?

1. **Clone the repository**:
   ```sh
   git clone https://github.com/dhruvanwd/movie-browser-app
   cd movie-explorer
2. ### Install dependencies:
```
npm install 
```
Create a .env file in the root directory and add your TMDB API key:
```
EXPO_PUBLIC_TMDB_API=your_api_key_here
EXPO_PUBLIC_TMDB_ACCESS_TOKEN=your_api_key_here
```
3. ### Start the project:

```
npm start
```
Usage
Run the application on your preferred simulator or device:

Use the tabbed interface or segmented control to switch between different movie categories.

Tap on any movie item to view detailed information about the movie.

Use the search functionality to find movies across all categories.

### API Reference
```
Now Playing: TMDB Now Playing API

Popular: TMDB Popular API

Top Rated: TMDB Top Rated API

Upcoming: TMDB Upcoming API
```