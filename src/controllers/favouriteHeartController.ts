import Favourite from '../components/favourite/favourite';
import { favourite } from '../data';
import { removeAllChildNodes } from '../helpers/domHelper';
import { toggleFavouriteMovie } from '../helpers/favourite';
import { movieDetailsApi } from '../services/movieDetailsApi';
import { IMovieList } from '../types/response/mapperResponse';

export const getAllFavouritesDetails = async () => {
    const detailsArr = favourite.map(async (id) => {
        const movieDetails = await movieDetailsApi.getDetails(id);
        return movieDetails;
    });

    const data = await Promise.all(detailsArr);
    const filtered = data.reduce((acc, curr) => {
        if (curr !== null) acc.push(curr);
        return acc;
    }, [] as IMovieList);

    return filtered;
};

export const renderDetails = async (movieList: IMovieList) => {
    const favouriteMovieContainer = document.getElementById('favorite-movies') as HTMLElement;
    removeAllChildNodes(favouriteMovieContainer);
    const movieButtons = movieList.map((el) => {
        const { id } = el;
        const movie = Favourite.renderMovie(el);
        favouriteMovieContainer.appendChild(movie);
        const button = document.getElementById(`f-${id}`);

        return button;
    });

    movieButtons.forEach((card) => {
        card?.addEventListener('click', buttonHeartClickHandler);
    });
};

export async function buttonHeartClickHandler(e: MouseEvent) {
    const element = e.target as HTMLElement;
    const movieId = element.dataset.originalId;
    if (movieId) {
        const albumCardWrapper = document.getElementById(movieId);
        if (albumCardWrapper) {
            const svg = albumCardWrapper.firstElementChild as HTMLElement;
            toggleFavouriteMovie(+movieId, svg);
        } else {
            toggleFavouriteMovie(+movieId);
        }

        const movieList = await getAllFavouritesDetails();
        renderDetails(movieList);
    }
}
