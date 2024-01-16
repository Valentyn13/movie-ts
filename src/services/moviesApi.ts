import { moviesMapper } from '../helpers/mapper';
import { ApiEndpoints } from '../types/api/endpoints';
import { requestOptions } from '../types/auth.tokens';

class MoviesApi {
    #apiPath: ApiEndpoints;

    constructor(apiPath: ApiEndpoints) {
        this.#apiPath = apiPath;
    }

    async getMovies(page?: number, name?: string) {
        const configurePage = page ? `${this.#apiPath}&page=${page}` : `${this.#apiPath}&page=1`;
        const configurePageAndName = name ? `${configurePage}&query=${name}` : configurePage;

        const response = await fetch(configurePageAndName, requestOptions);
        const data = await response.json();

        const mapperedMovies = moviesMapper(data);
        return mapperedMovies;
    }
}

export const popularMoviesApi = new MoviesApi(ApiEndpoints.PopularMovies);
export const upcumingMoviesApi = new MoviesApi(ApiEndpoints.UpcommingMovies);
export const topRatedMoviesApi = new MoviesApi(ApiEndpoints.TopRatedMovies);
export const searchByNameMovies = new MoviesApi(ApiEndpoints.SearchByNameMovies);
