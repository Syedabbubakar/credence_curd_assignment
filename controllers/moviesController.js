import { addMovieService, getAllMoviesService, updateMovieService, deleteMovieService } from '../services/moviesServices.js';
import { handleCatchError } from '../helpers/handleErors.js';

export const addMovie = async (req, res) => {
    try {
        const movieData = req.body;
        const addedMovie = await addMovieService(movieData);
        res.status(201).json({ success: true, response: addedMovie });
    } catch (error) {
        handleCatchError(res, "Error while adding the movie", error);
    }
};

export const getAllMovies = async (req, res) => {
    try {
        const movies = await getAllMoviesService();
        res.status(200).json({ success: true, count: movies.length, response: movies });
    } catch (error) {
        handleCatchError(res, "Error while getting the movies", error);
    }
};

export const updateMovie = async (req, res) => {
    try {
        const { movieId } = req.params;
        const updatedMovie = await updateMovieService(movieId, req.body);
        res.status(200).json({ success: true, response: updatedMovie });
    } catch (error) {
        handleCatchError(res, "Error while updating the movie", error);
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const { movieId } = req.params;
        const responseMessage = await deleteMovieService(movieId);
        res.status(200).json({ success: true, response: responseMessage });
    } catch (error) {
        handleCatchError(res, "Error while deleting the movie", error);
    }
};
