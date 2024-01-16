import { FAVOURITE_MOVIES_KEY } from './types/localstorage/localstorage.types';

export const favourite = (
    localStorage.getItem(FAVOURITE_MOVIES_KEY) ? JSON.parse(localStorage.getItem(FAVOURITE_MOVIES_KEY) || '') : []
) as number[];
