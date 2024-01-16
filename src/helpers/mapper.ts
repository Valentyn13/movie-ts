/* eslint-disable @typescript-eslint/naming-convention */
import { IMovie, IMovieList, IMoviesMapperResponse } from '../types/response/mapperResponse';
import { IMoviesResponse } from '../types/response/movieResponse';

export const moviesMapper = (moviesResponse: IMoviesResponse): IMoviesMapperResponse => {
    const { page, results } = moviesResponse;

    const normalizedMoviesData = results.map((movie) => {
        const { id, original_title, title, overview, release_date, poster_path } = movie;

        return {
            id,
            title,
            original_title,
            overview,
            release_date,
            poster_path,
        };
    });

    return {
        page,
        movies: normalizedMoviesData,
    };
};

export const getRandomElement = (arr: IMovieList) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

export const detailsMapper = (data: unknown) => {
    if (typeof data === 'object' && data !== null) {
        const { id, title, original_title, overview, poster_path, release_date } = data as IMovie;
        return {
            id,
            title,
            original_title,
            overview,
            poster_path,
            release_date,
        };
    }
    return null;
};
