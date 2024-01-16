import { favourite } from '../../data';
import createElement, { removeAllChildNodes } from '../../helpers/domHelper';
import { movieDetailsApi } from '../../services/movieDetailsApi';
import Favourite from '../favourite/favourite';

class Header {
    static renderHeaderContent() {
        const navbar = createElement({
            tagName: 'div',
            className: 'navbar navbar-dark bg-dark shadow-sm',
            attributes: {},
        });
        const container = createElement({ tagName: 'div', className: 'container', attributes: {} });
        const logo = createElement({
            tagName: 'a',
            className: 'navbar-brand d-flex align-items-center',
            attributes: {
                href: '#',
            },
        });

        const button = createElement({
            tagName: 'button',
            className: 'navbar-toggler',
            attributes: {
                type: 'button',
                'data-bs-toggle': 'offcanvas',
                'data-bs-target': '#offcanvasRight',
                'aria-controls': 'offcanvasRight',
            },
        });

        button.addEventListener('click', async () => {
            const favouriteMovieContainer = document.getElementById('favorite-movies') as HTMLElement;
            removeAllChildNodes(favouriteMovieContainer);
            favourite.forEach(async (id) => {
                const movieDetails = await movieDetailsApi.getDetails(id);

                if (movieDetails) {
                    const movieCard = Favourite.renderMovie(movieDetails).cloneNode(true);
                    favouriteMovieContainer.appendChild(movieCard);
                    const buttonHeart = document.getElementById(`f-${id}`);
                    if (buttonHeart) {
                        buttonHeart.addEventListener('click', (e) => {
                            const element = e.target as HTMLElement;
                            const movieId = element.dataset.originalId;
                            console.log('Enter', movieId);
                        });
                    }
                }
            });
        });

        logo.innerHTML = `<strong>MOVIE</strong>`;
        button.innerHTML = `<span class="navbar-toggler-icon"></span>`;

        container.append(logo, button);
        navbar.appendChild(container);
        return navbar;
    }

    async render() {
        const headerComponent = createElement({ tagName: 'header', className: '', attributes: {} });
        headerComponent.appendChild(Header.renderHeaderContent());
        const favouriteComponent = Favourite.render();
        return { headerComponent, favouriteComponent };
    }
}

export default Header;
