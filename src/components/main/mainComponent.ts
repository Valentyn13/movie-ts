import { IAppData } from '../../app';

import createElement from '../../helpers/domHelper';
import { getRandomElement } from '../../helpers/mapper';
import Album from '../album/album';
import Filter from '../filter/filter';
import RandomMovie from '../randomMovie/randomMovie';
import Search from '../search/search';

class Main {
    static render(appData: IAppData) {
        const mainComponent = createElement({ tagName: 'main', className: '', attributes: {} });
        const randomMovieComponent = RandomMovie.render(getRandomElement(appData.movies));
        const filterComponent = Filter.render();
        const searchComponent = Search.render();
        const albumComponent = Album.render(appData.movies);

        mainComponent.append(randomMovieComponent, filterComponent, searchComponent, albumComponent);
        return mainComponent;
    }
}

export default Main;
