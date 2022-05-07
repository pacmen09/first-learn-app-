const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '' );

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Одиy из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его', '');
const c = prompt('Оди из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

