/* eslint-disable no-plusplus */
import App from '../../app';
import { radioButtonController } from '../../controllers/radioButton';
import createElement, { removeAllChildNodes } from '../../helpers/domHelper';
import Album from '../album/album';

class LoadMore {
    static render() {
        const loadMoreComponent = createElement({
            tagName: 'div',
            className: 'd-flex justify-content-center align-items-center pt-4',
            attributes: {},
        });
        const button = createElement({
            tagName: 'button',
            className: 'btn btn-lg btn-outline-success',
            attributes: { id: 'load-more', type: 'button' },
        });
        button.innerText = 'Load more';
        button.addEventListener('click', async () => {
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
        });
        loadMoreComponent.appendChild(button);
        return loadMoreComponent;
    }
}

export default LoadMore;
