import { favourite } from '../data';
import { FAVOURITE_MOVIES_KEY } from '../types/localstorage/localstorage.types';

export const saveLocalStorageFavourites = () => {
    localStorage.setItem(FAVOURITE_MOVIES_KEY, JSON.stringify(favourite));
};

export const isMovieInFavourites = (movieId: number) => {
    const isExist = favourite.find((id) => id === movieId);
    if (isExist) {
        return true;
    }
    return false;
};

export const deleteMovie = (movieId: number) => {
    const index = favourite.findIndex((id) => id === movieId);
    favourite.splice(index, 1);
};

export const addFavourite = (movieId: number) => {
    if (!isMovieInFavourites(movieId)) {
        favourite.push(movieId);
    }
};

export const toggleFavouriteMovie = (movieId: number, element: HTMLElement) => {
    if (isMovieInFavourites(movieId)) {
        deleteMovie(movieId);
        element.setAttribute('fill', '#ff000078');
    } else {
        addFavourite(movieId);
        element.setAttribute('fill', 'red');
    }
    saveLocalStorageFavourites();
};
