/* eslint-disable @typescript-eslint/naming-convention */
import createElement from '../../helpers/domHelper';
import { generateSvgIconHtml } from '../../types/constants';
import { IMovie } from '../../types/response/mapperResponse';

class Favourite {
    static renderMovie(movieData: IMovie) {
        const { id, overview, release_date, poster_path } = movieData;
        const favouriteMovieGrid = createElement({ tagName: 'div' });
        const movieCard = createElement({ tagName: 'div', className: 'card shadow-sm' });
        const cardImg = createElement({
            tagName: 'img',
            attributes: {
                src: `https://image.tmdb.org/t/p/original/${poster_path}`,
            },
        });

        const svgIconWrapper = createElement({
            tagName: 'div',
            className: 'position-absolute wr',
            attributes: {
                id: `f-${id}`,
                'data-original-id': `${id}`,
            },
        });

        svgIconWrapper.innerHTML = generateSvgIconHtml(id);

        const cardBody = createElement({ tagName: 'div', className: 'card-body' });
        const cardText = createElement({ tagName: 'p', className: 'card-text truncate' });
        const movieReleaseDate = createElement({
            tagName: 'div',
            className: 'd-flex justify-content-between align-items-center',
        });

        movieReleaseDate.innerHTML = `<small class="text-muted">${release_date}</small>`;
        cardText.innerText = overview;

        cardBody.append(cardText, movieReleaseDate);
        movieCard.append(cardImg, svgIconWrapper, cardBody);
        favouriteMovieGrid.append(movieCard);

        return favouriteMovieGrid;
    }

    static renderContent() {
        const favouriteHeader = createElement({ tagName: 'div', className: 'offcanvas-header' });
        const favouriteHeaderTitle = createElement({
            tagName: 'h5',
            attributes: {
                id: 'offcanvasRightLabel',
            },
        });
        const favoriteHeaerButton = createElement({
            tagName: 'button',
            className: 'btn-close text-reset',
            attributes: {
                'data-bs-dismiss': 'offcanvas',
                'aria-label': 'Close',
            },
        });
        const favouriteMovieContainer = createElement({
            tagName: 'div',
            className: 'offcanvas-body favourite-movies-body',
            attributes: {
                id: 'favorite-movies',
            },
        });

        favouriteHeaderTitle.innerText = 'FAVORITE';

        favouriteHeader.append(favouriteHeaderTitle, favoriteHeaerButton);

        return [favouriteHeader, favouriteMovieContainer];
    }

    static render() {
        const favouriteComponent = createElement({
            tagName: 'div',
            className: 'offcanvas offcanvas-end',
            attributes: {
                tabindex: '-1',
                id: 'offcanvasRight',
                'aria-labelledby': 'offcanvasRightLabel',
            },
        });

        const [header, conainer] = Favourite.renderContent();
        favouriteComponent.append(header, conainer);

        return favouriteComponent;
    }
}

export default Favourite;
