import App from '../app';
import Album from '../components/album/album';
import { radioButtonController } from '../controllers/radioButton';
import { removeAllChildNodes } from '../helpers/domHelper';

export const filterOnclickController = async () => {
    const response = await radioButtonController();
    const filmsContainerWrapper = document.getElementById('film-container-wrapper');

    if (response) {
        App.appData.movies = response.movies;
        App.appData.currentPage = response.page;
    }

    if (filmsContainerWrapper) {
        removeAllChildNodes(filmsContainerWrapper);
        const filmContainer = Album.createContent(App.appData.movies);
        filmsContainerWrapper.appendChild(filmContainer);
    }
};
