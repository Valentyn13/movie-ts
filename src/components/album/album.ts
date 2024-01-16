/* eslint-disable no-plusplus */
import createElement from '../../helpers/domHelper';
import { IMovieList } from '../../types/response/mapperResponse';
import FilmCard from '../filmCard/filmCard';
import LoadMore from '../loadMore/loadMore';

class Album {
    static createContent(movieList: IMovieList) {
        const filmConatainer = createElement({
            tagName: 'div',
            className: 'row',
            attributes: { id: 'film-container' },
        });

        for (let i = 0; i < movieList.length; i++) {
            const card = FilmCard.render(movieList[i]);
            filmConatainer.appendChild(card);
        }
        return filmConatainer;
    }

    static render(movieList: IMovieList) {
        const albumComponent = createElement({ tagName: 'div', className: 'album py-5 bg-light' });

        const loadMore = LoadMore.render();

        const container = createElement({
            tagName: 'div',
            className: 'container',
            attributes: { id: 'film-container-wrapper' },
        });

        const filmConatainer = Album.createContent(movieList);

        container.appendChild(filmConatainer);

        albumComponent.appendChild(container);
        albumComponent.appendChild(loadMore);

        return albumComponent;
    }
}

export default Album;
