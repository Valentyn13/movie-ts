/* eslint-disable no-restricted-syntax */
import App from '../app';
import Album from '../components/album/album';
import { removeAllChildNodes } from '../helpers/domHelper';
import { searchByNameMovies } from './moviesApi';

export const searchController = async (e: SubmitEvent) => {
    e.preventDefault();
    const nameInput = document.getElementById('search') as HTMLInputElement;
    const radioButtons = document.querySelectorAll('input[name="btnradio"]');
    const filmsContainerWrapper = document.getElementById('film-container-wrapper');
    const movieName = nameInput.value;

    if (movieName) {
        const response = await searchByNameMovies.getMovies(1, movieName);

        if (response) {
            App.appData.movies = response.movies;
            App.appData.currentPage = response.page;
        }

        if (filmsContainerWrapper) {
            removeAllChildNodes(filmsContainerWrapper);
            const filmContainer = Album.createContent(App.appData.movies);
            filmsContainerWrapper.appendChild(filmContainer);
        }

        for (const radioButton of radioButtons) {
            if ((radioButton as HTMLInputElement).checked) {
                (radioButton as HTMLInputElement).checked = false;
            }
        }
    } else {
        alert('Enter a movie name!');
    }
};
