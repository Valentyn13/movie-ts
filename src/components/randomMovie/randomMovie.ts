/* eslint-disable @typescript-eslint/naming-convention */
import createElement from '../../helpers/domHelper';
import { IMovie } from '../../types/response/mapperResponse';

class RandomMovie {
    static render(movie: IMovie) {
        const { title, overview, poster_path } = movie;

        const randomMovieComponent = createElement({
            tagName: 'section',
            className: 'row py-lg-5 component-positon',
            attributes: { id: 'random-movie' },
        });
        const row = createElement({ tagName: 'div', className: 'row py-lg-5 random-content', attributes: {} });
        const column = createElement({
            tagName: 'div',
            className: 'col-lg-6 col-md-8 mx-auto column-display',
            attributes: {
                style: 'background-color: #2525254f',
            },
        });

        const cardImage = createElement({
            tagName: 'img',
            className: 'random-image_',
            attributes: {
                src: `https://image.tmdb.org/t/p/original/${poster_path}`,
            },
        });
        const cardImageContainer = createElement({
            tagName: 'div',
            className: 'random-image-container',
            attributes: {},
        });

        cardImageContainer.appendChild(cardImage);
        const movieName = createElement({
            tagName: 'h1',
            className: 'fw-light text-light',
            attributes: {
                id: 'random-movie-name',
            },
        });
        movieName.innerText = title;

        const movieDesc = createElement({
            tagName: 'p',
            className: 'lead text-white',
            attributes: {
                id: 'random-movie-description',
            },
        });

        movieDesc.innerText = overview;

        column.append(movieName, movieDesc);
        row.append(column);
        randomMovieComponent.append(cardImageContainer, row);

        return randomMovieComponent;
    }
}

export default RandomMovie;
