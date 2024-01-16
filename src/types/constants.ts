import { isMovieInFavourites } from '../helpers/favourite';

export const generateSvgIconHtml = (id: number) => {
    const svgIcontHtml = `
<svg
xmlns="http://www.w3.org/2000/svg"
stroke="red"
fill= ${isMovieInFavourites(id) ? 'red' : '#ff000078'}
width="50"
height="50"
viewBox="0 -2 18 22"
class="svg-heart"
>
<path
    fill-rule="evenodd"
    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
/>
</svg>
`;
    return svgIcontHtml;
};

export const getImageApiPath = (posterPath: string) => `https://image.tmdb.org/t/p/original/${posterPath}`;
