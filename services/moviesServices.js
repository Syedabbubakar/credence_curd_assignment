import MoviesModel from '../models/moviesModel.js';

export const addMovieService = async (movieData) => {
    const { name, img, summary } = movieData;
    try {
        const newMovie = await MoviesModel.create({ name, img, summary });
        return newMovie;
    } catch (error) {
        throw new Error('Error while adding the movie: ' + error.message);
    }
};

export const getAllMoviesService = async () => {
    try {
        const movies = await MoviesModel.find();
        return movies;
    } catch (error) {
        throw new Error('Error while getting the movies: ' + error.message);
    }
};

export const updateMovieService = async (movieId, movieData) => {
    try {
        const updatedMovie = await MoviesModel.findByIdAndUpdate(movieId, movieData, { new: true });
        return updatedMovie;
    } catch (error) {
        throw new Error('Error while updating the movie: ' + error.message);
    }
};

export const deleteMovieService = async (movieId) => {
    try {
        await MoviesModel.findByIdAndDelete(movieId);
        return "Movie deleted successfully";
    } catch (error) {
        throw new Error('Error while deleting the movie: ' + error.message);
    }
};
