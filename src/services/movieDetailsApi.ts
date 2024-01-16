import { detailsMapper } from '../helpers/mapper';
import { ApiEndpoints } from '../types/api/endpoints';
import { requestOptions } from '../types/auth.tokens';

class MovieDetailsApi {
    #apiPath: ApiEndpoints;

    constructor(apiPath: ApiEndpoints) {
        this.#apiPath = apiPath;
    }

    async getDetails(id: number) {
        const configureEndpoint = `${this.#apiPath}${id}?language=en-US`;

        const response = await fetch(configureEndpoint, requestOptions);
        const data = (await response.json()) as unknown;

        const movieDetails = detailsMapper(data);
        return movieDetails;
    }
}

export const movieDetailsApi = new MovieDetailsApi(ApiEndpoints.MovieDetails);
