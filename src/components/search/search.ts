/* eslint-disable no-restricted-syntax */
import createElement from '../../helpers/domHelper';
import { searchController } from '../../services/searchController';

class Search {
    static render() {
        const searchComponent = createElement({
            tagName: 'div',
            className: 'container-fluid d-flex bg-light justify-content-center',
        });
        const form = createElement({ tagName: 'form', className: 'form-inline col-6 px-2 d-flex' });

        const searchInput = createElement({
            tagName: 'input',
            className: 'form-control m-2',
            attributes: {
                type: 'search',
                placeholder: 'Search',
                id: 'search',
            },
        });

        const searchButton = createElement({
            tagName: 'button',
            className: 'btn btn-dark m-2',
            attributes: {
                type: 'submit',
                id: 'search-submit',
            },
        });

        form.addEventListener('submit', searchController);

        searchButton.innerText = 'Search';
        form.append(searchInput, searchButton);

        searchComponent.appendChild(form);
        return searchComponent;
    }
}

export default Search;
