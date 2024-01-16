export const AUTH_BEARER_TOKEN =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjQyYzcxOWIyNjA2YTg2MDNlYjg5MDVmZmM3NGNlZSIsInN1YiI6IjY1YTNhNDQ5YmMyY2IzMDBiZTAyMjc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tWRGYzerYDH772JBhndICWbOtuG1TRdzPRBo6ZL1yoo';

export const requestOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: AUTH_BEARER_TOKEN,
    },
};
