/* eslint-disable no-plusplus */
import App from '../../app';
import { radioButtonController } from '../../controllers/radioButton';
import createElement, { removeAllChildNodes } from '../../helpers/domHelper';
import Album from '../album/album';

class Filter {
    static createContent() {
        const buttonGroup = createElement({
            tagName: 'div',
            className: 'btn-group',
            attributes: {
                id: 'button-wrapper',
                srole: 'group',
                'aria-label': 'Basic radio toggle button group',
            },
        });
        const popularRadioInput = createElement({
            tagName: 'input',
            className: 'btn-check',
            attributes: {
                type: 'radio',
                name: 'btnradio',
                id: 'popular',
                autocomplete: 'off',
                checked: 'true',
            },
        });
        const upcommingRadioInput = createElement({
            tagName: 'input',
            className: 'btn-check',
            attributes: {
                type: 'radio',
                name: 'btnradio',
                id: 'upcoming',
                autocomplete: 'off',
            },
        });
        const topRatedRadioInput = createElement({
            tagName: 'input',
            className: 'btn-check',
            attributes: {
                type: 'radio',
                name: 'btnradio',
                id: 'top_rated',
                autocomplete: 'off',
            },
        });
        const popularLable = createElement({
            tagName: 'label',
            className: 'btn btn-outline-dark',
            attributes: {
                for: 'popular',
            },
        });
        const upcommingLable = createElement({
            tagName: 'label',
            className: 'btn btn-outline-dark',
            attributes: {
                for: 'upcoming',
            },
        });
        const topRatedLable = createElement({
            tagName: 'label',
            className: 'btn btn-outline-dark',
            attributes: {
                for: 'top_rated',
            },
        });

        popularRadioInput.addEventListener('click', async () => {
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
        });
        upcommingRadioInput.addEventListener('click', async () => {
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
        });
        topRatedRadioInput.addEventListener('click', async () => {
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
        });

        popularLable.innerText = 'Popular';
        upcommingLable.innerText = 'Upcomming';
        topRatedLable.innerHTML = 'Top rated';

        buttonGroup.append(
            popularRadioInput,
            popularLable,
            upcommingRadioInput,
            upcommingLable,
            topRatedRadioInput,
            topRatedLable
        );

        return buttonGroup;
    }

    static render() {
        const filterComponent = createElement({
            tagName: 'div',
            className: 'container-fluid d-flex bg-light justify-content-center p-2',
            attributes: {},
        });
        filterComponent.appendChild(Filter.createContent());
        return filterComponent;
    }
}

export default Filter;
