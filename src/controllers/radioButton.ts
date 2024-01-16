/* eslint-disable no-restricted-syntax */
import { popularMoviesApi, searchByNameMovies, topRatedMoviesApi, upcumingMoviesApi } from '../services/moviesApi';

type ButtonIdType = 'popular' | 'upcoming' | 'top_rated' | '';

export const radioButtonController = async (page?: number, searchName?: string) => {
    const radioButtons = document.querySelectorAll('input[name="btnradio"]');

    let buttonId: ButtonIdType = '';

    for (const radioButton of radioButtons) {
        if ((radioButton as HTMLInputElement).checked) {
            buttonId = radioButton.id as ButtonIdType;
            break;
        }
    }

    if (buttonId === '' && searchName) {
        return searchByNameMovies.getMovies(page, searchName);
    }

    if (buttonId === 'popular') {
        return popularMoviesApi.getMovies(page);
    }

    if (buttonId === 'upcoming') {
        return upcumingMoviesApi.getMovies(page);
    }

    if (buttonId === 'top_rated') {
        return topRatedMoviesApi.getMovies(page);
    }

    return null;
};
