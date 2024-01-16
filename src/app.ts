import Header from './components/header/header';
import Main from './components/main/mainComponent';
import { popularMoviesApi } from './services/moviesApi';
import { IMovieList } from './types/response/mapperResponse';

export interface IAppData {
    currentPage: number;
    movies: IMovieList;
}

class App {
    static rootElement = document.getElementById('root');

    static loadingElement = document.getElementById('loading-overlay');

    static appData: IAppData;

    static async startApp() {
        const initMoviesData = await popularMoviesApi.getMovies();

        App.appData = {
            movies: initMoviesData.movies,
            currentPage: initMoviesData.page,
        };

        const { headerComponent, favouriteComponent } = await Header.render();

        const mainComponent = Main.render(App.appData);

        App.rootElement?.appendChild(headerComponent);
        App.rootElement?.appendChild(favouriteComponent);
        App.rootElement?.appendChild(mainComponent);
    }
}

export default App;
