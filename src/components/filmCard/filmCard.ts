/* eslint-disable @typescript-eslint/naming-convention */
import createElement from '../../helpers/domHelper';
import { toggleFavouriteMovie } from '../../helpers/favourite';
import { generateSvgIconHtml, getImageApiPath } from '../../types/constants';
import { IMovie } from '../../types/response/mapperResponse';

class FilmCard {
    static createContent(movie: IMovie) {
        const { poster_path, release_date, overview, id } = movie;

        const cardComponent = createElement({ tagName: 'div', className: 'card shadow-sm' });
        const cardImage = createElement({
            tagName: 'img',
            attributes: {
                src: getImageApiPath(poster_path),
            },
        });
        const svgIconWrapper = createElement({
            tagName: 'div',
            className: 'position-absolute wr',
            attributes: {
                id: `${id}`,
            },
        });

        const cardBody = createElement({ tagName: 'div', className: 'card-body' });
        const cardText = createElement({ tagName: 'p', className: 'card-text truncate' });
        const releaseDate = createElement({
            tagName: 'div',
            className: 'd-flex justify-content-between align-items-center',
        });

        svgIconWrapper.innerHTML = generateSvgIconHtml(id);

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
        });
        cardWrapper.appendChild(FilmCard.createContent(movie));
        return cardWrapper;
    }
}

export default FilmCard;
