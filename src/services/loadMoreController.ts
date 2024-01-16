import App from '../app';
import Album from '../components/album/album';
import { radioButtonController } from '../controllers/radioButton';
import { removeAllChildNodes } from '../helpers/domHelper';

export const loadMoreController = async () => {
    const filmsContainerWrapper = document.getElementById('film-container-wrapper');
    const nameInput = document.getElementById('search') as HTMLInputElement;
    const movieName = nameInput.value;
    const response = await radioButtonController(App.appData.currentPage + 1, movieName);

    if (response) {
        App.appData.movies = [...App.appData.movies, ...response.movies];
        App.appData.currentPage = response.page;
    }

    if (filmsContainerWrapper) {
        removeAllChildNodes(filmsContainerWrapper);
        const filmContainer = Album.createContent(App.appData.movies);
        filmsContainerWrapper.appendChild(filmContainer);
    }
};
