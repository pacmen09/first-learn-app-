
const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '' );

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

////////////////////////////////////////////////////////////////////
// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
////////////////////////////////////////////////////////////////////



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a !='' && b !='') {
        personalMovieDB.movies[a] = b;     
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}


console.log(personalMovieDB);
console.log(personalMovieDB.movies);


if (personalMovieDB.count < 10) {
    console.log('Посмотренно довольно мало фильмов, фильмов просмотренно: ' + personalMovieDB.count);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Вы класический зритель, фильмов просмотренно: ' + personalMovieDB.count);
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман, фильмов просмотренно: ' + personalMovieDB.count);
} else {
    console.log('произошла ошибка');
}

console.log(personalMovieDB.count[a]);
console.log(personalMovieDB.count[b]);


