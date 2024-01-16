/* eslint-disable no-plusplus */
import createElement from '../../helpers/domHelper';
import { loadMoreController } from '../../services/loadMoreController';

class LoadMore {
    static render() {
        const loadMoreComponent = createElement({
            tagName: 'div',
            className: 'd-flex justify-content-center align-items-center pt-4',
        });
        const button = createElement({
            tagName: 'button',
            className: 'btn btn-lg btn-outline-success',
            attributes: { id: 'load-more', type: 'button' },
        });
        button.innerText = 'Load more';
        button.addEventListener('click', loadMoreController);
        loadMoreComponent.appendChild(button);
        return loadMoreComponent;
    }
}

export default LoadMore;
