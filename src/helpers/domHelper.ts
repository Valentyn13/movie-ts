interface ICreateElementParams {
    tagName: string;
    className?: string;
    attributes?: {
        [key: string]: string;
    };
}

export default function createElement({ tagName, className = '', attributes = {} }: ICreateElementParams): HTMLElement {
    const element = document.createElement(tagName);

    if (className) {
        const classNames = className.split(' ').filter(Boolean);
        element.classList.add(...classNames);
    }

    Object.keys(attributes).forEach((key) => element.setAttribute(key, attributes[key]));

    return element;
}

export const removeAllChildNodes = (parent: HTMLElement) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
