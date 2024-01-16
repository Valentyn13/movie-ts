/* eslint-disable no-restricted-syntax */
import App from '../../app';
import createElement, { removeAllChildNodes } from '../../helpers/domHelper';
import { searchByNameMovies } from '../../services/moviesApi';
import Album from '../album/album';

class Search {
    static render() {
        const searchComponent = createElement({
            tagName: 'div',
            className: 'container-fluid d-flex bg-light justify-content-center',
        });
        const form = createElement({ tagName: 'form', className: 'form-inline col-6 px-2 d-flex' });

        const searchInput = createElement({
            tagName: 'input',
            className: 'form-control m-2',
            attributes: {
                type: 'search',
                placeholder: 'Search',
                id: 'search',
            },
        });

        const searchButton = createElement({
            tagName: 'button',
            className: 'btn btn-dark m-2',
            attributes: {
                type: 'submit',
                id: 'search-submit',
            },
        });

        form.addEventListener('submit', async (e) => {
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
        });

        searchButton.innerText = 'Search';
        form.append(searchInput, searchButton);

        searchComponent.appendChild(form);
        return searchComponent;
    }
}

export default Search;
