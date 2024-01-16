/* eslint-disable @typescript-eslint/naming-convention */
import createElement from '../../helpers/domHelper';
import { isMovieInFavourites, toggleFavouriteMovie } from '../../helpers/favourite';
import { IMovie } from '../../types/response/mapperResponse';

class FilmCard {
    static createContent(movie: IMovie) {
        const { poster_path, release_date, overview, id } = movie;

        const cardComponent = createElement({ tagName: 'div', className: 'card shadow-sm', attributes: {} });
        const cardImage = createElement({
            tagName: 'img',
            className: '',
            attributes: {
                src: `https://image.tmdb.org/t/p/original/${poster_path}`,
            },
        });
        const svgIconWrapper = createElement({
            tagName: 'div',
            className: 'position-absolute wr',
            attributes: {
                id: `${id}`,
            },
        });

        const cardBody = createElement({ tagName: 'div', className: 'card-body', attributes: {} });
        const cardText = createElement({ tagName: 'p', className: 'card-text truncate', attributes: {} });
        const releaseDate = createElement({
            tagName: 'div',
            className: 'd-flex justify-content-between align-items-center',
            attributes: {},
        });

        svgIconWrapper.innerHTML = `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="red"
        fill= ${isMovieInFavourites(id) ? 'red' : '#ff000078'}
        width="50"
        height="50"
        viewBox="0 -2 18 22"
        class="svg-heart"
    >
        <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
    </svg>
        `;
        svgIconWrapper.addEventListener('click', (e) => {
            const element = e.target as HTMLElement;
            const elementId = element.id;
            const svg = element.firstElementChild as HTMLElement;
            if (elementId) {
                toggleFavouriteMovie(+elementId, svg);
            }
        });

        cardText.innerText = overview;
        releaseDate.innerText = release_date;

        cardBody.append(cardText, releaseDate);
        cardComponent.append(cardImage, svgIconWrapper, cardBody);

        return cardComponent;
    }

    static render(movie: IMovie) {
        const cardWrapper = createElement({
            tagName: 'div',
            className: 'col-lg-3 col-md-4 col-12 p-2',
            attributes: {},
        });
        cardWrapper.appendChild(FilmCard.createContent(movie));
        return cardWrapper;
    }
}

export default FilmCard;
