/* eslint-disable no-plusplus */
import createElement from '../../helpers/domHelper';
import { filterOnclickController } from '../../services/filterOnclickController';

class Filter {
    static createContent() {
        const buttonGroup = createElement({
            tagName: 'div',
            className: 'btn-group',
            attributes: {
                id: 'button-wrapper',
                srole: 'group',
                'aria-label': 'Basic radio toggle button group',
            },
        });
        const popularRadioInput = createElement({
            tagName: 'input',
            className: 'btn-check',
            attributes: {
                type: 'radio',
                name: 'btnradio',
                id: 'popular',
                autocomplete: 'off',
                checked: 'true',
            },
        });
        const upcommingRadioInput = createElement({
            tagName: 'input',
            className: 'btn-check',
            attributes: {
                type: 'radio',
                name: 'btnradio',
                id: 'upcoming',
                autocomplete: 'off',
            },
        });
        const topRatedRadioInput = createElement({
            tagName: 'input',
            className: 'btn-check',
            attributes: {
                type: 'radio',
                name: 'btnradio',
                id: 'top_rated',
                autocomplete: 'off',
            },
        });
        const popularLable = createElement({
            tagName: 'label',
            className: 'btn btn-outline-dark',
            attributes: {
                for: 'popular',
            },
        });
        const upcommingLable = createElement({
            tagName: 'label',
            className: 'btn btn-outline-dark',
            attributes: {
                for: 'upcoming',
            },
        });
        const topRatedLable = createElement({
            tagName: 'label',
            className: 'btn btn-outline-dark',
            attributes: {
                for: 'top_rated',
            },
        });

        popularRadioInput.addEventListener('click', filterOnclickController);
        upcommingRadioInput.addEventListener('click', filterOnclickController);
        topRatedRadioInput.addEventListener('click', filterOnclickController);

        popularLable.innerText = 'Popular';
        upcommingLable.innerText = 'Upcomming';
        topRatedLable.innerHTML = 'Top rated';

        buttonGroup.append(
            popularRadioInput,
            popularLable,
            upcommingRadioInput,
            upcommingLable,
            topRatedRadioInput,
            topRatedLable
        );

        return buttonGroup;
    }

    static render() {
        const filterComponent = createElement({
            tagName: 'div',
            className: 'container-fluid d-flex bg-light justify-content-center p-2',
        });
        filterComponent.appendChild(Filter.createContent());
        return filterComponent;
    }
}

export default Filter;
