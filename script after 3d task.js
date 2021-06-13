/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

alert('Practice Task #3');

let numberOfFilms = 0;

function start() { 

do {numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?????!!!!!!!!!!');}
while (numberOfFilms<=0 || numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms));

alert(numberOfFilms);
}

start();

let personalMovieDB = {count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
console.log(personalMovieDB);

function rememberMyFilms() {

let filmName = '';
let filmScore = '';

for (let i=0; i<=1; i++)  {

	do {filmName = prompt('Один из последних просмотренных фильмов?');} 
	while ( filmName == '' || filmName == 0 || filmName == null || filmName.length > 50);
	do {filmScore = prompt('На сколько оцените его?');}
	while ( filmScore == '' || filmScore == 0 || filmScore == null || +filmScore > 100);
	
	personalMovieDB.movies[filmName] = filmScore;
}

console.log(personalMovieDB);

let i1 = 0;

while (i1<2)  {

	do {filmName = prompt('Один из последних просмотренных фильмов?');} 
	while ( filmName == '' || filmName == 0 || filmName == null || filmName.length > 50);
	do {filmScore = prompt('На сколько оцените его?');}
	while ( filmScore == '' || filmScore == 0 || filmScore == null || +filmScore > 100);
	
	personalMovieDB.movies[filmName] = filmScore;
	i1++;
}

console.log(personalMovieDB);

}

rememberMyFilms();

function detectPersonalLevel() {

if (personalMovieDB.count < 10) {
	alert ('Просмотрено довольно мало фильмов');
} else if ((personalMovieDB.count >= 10) || (personalMovieDB.count < 30)) {
	alert ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert ('Вы киноман');
} else {alert ('Произошла ошибка');}
}

detectPersonalLevel();

function showMyDB () {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB.privat, personalMovieDB);
	}
}

showMyDB();

function writeYourGenres () {
	for (let i = 1; i <= 3; i++) {
		let a = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i-1] = a;
	}
}

writeYourGenres();
showMyDB();