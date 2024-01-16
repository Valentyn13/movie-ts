import { detailsMapper } from '../helpers/mapper';
import { ApiEndpoints } from '../types/api/endpoints';

class MovieDetailsApi {
    #apiPath: ApiEndpoints;

    constructor(apiPath: ApiEndpoints) {
        this.#apiPath = apiPath;
    }

    async getDetails(id: number) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjQyYzcxOWIyNjA2YTg2MDNlYjg5MDVmZmM3NGNlZSIsInN1YiI6IjY1YTNhNDQ5YmMyY2IzMDBiZTAyMjc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tWRGYzerYDH772JBhndICWbOtuG1TRdzPRBo6ZL1yoo',
            },
        };

        const configureEndpoint = `${this.#apiPath}${id}?language=en-US`;

        const response = await fetch(configureEndpoint, options);
        const data = (await response.json()) as unknown;

        const movieDetails = detailsMapper(data);
        return movieDetails;
    }
}

export const movieDetailsApi = new MovieDetailsApi(ApiEndpoints.MovieDetails);
