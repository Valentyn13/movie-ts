export interface IMovie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path: string;
}

export type IMovieList = IMovie[];

export interface IMoviesMapperResponse {
    page: number;
    movies: IMovieList;
}
