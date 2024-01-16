import { getAllFavouritesDetails, renderDetails } from '../../controllers/favouriteHeartController';
import createElement from '../../helpers/domHelper';
import Favourite from '../favourite/favourite';

class Header {
    static renderHeaderContent() {
        const navbar = createElement({
            tagName: 'div',
            className: 'navbar navbar-dark bg-dark shadow-sm',
        });
        const container = createElement({ tagName: 'div', className: 'container' });
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
            const movieList = await getAllFavouritesDetails();
            renderDetails(movieList);
        });

        logo.innerHTML = `<strong>MOVIE</strong>`;
        button.innerHTML = `<span class="navbar-toggler-icon"></span>`;

        container.append(logo, button);
        navbar.appendChild(container);
        return navbar;
    }

    static async render() {
        const headerComponent = createElement({ tagName: 'header' });
        headerComponent.appendChild(Header.renderHeaderContent());
        const favouriteComponent = Favourite.render();
        return { headerComponent, favouriteComponent };
    }
}

export default Header;
