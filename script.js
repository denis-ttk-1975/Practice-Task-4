/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

alert('Practice Task #4');

let personalMovieDB = {count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() { 
		do {personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?????!!!!!!!!!!');}
		while (personalMovieDB.count<=0 || personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count));
	},

	rememberMyFilms: function() {
		let filmName = '';
		let filmScore = '';
		
		for (let i=0; i<=1; i++)  {
			do {filmName = prompt('Один из последних просмотренных фильмов?');} 
			while ( filmName == '' || filmName == 0 || filmName == null || filmName.length > 50);
			do {filmScore = prompt('На сколько оцените его?');}
			while ( filmScore == '' || filmScore == 0 || filmScore == null || +filmScore > 100);
			
			personalMovieDB.movies[filmName] = filmScore;
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			alert ('Просмотрено довольно мало фильмов');
		} else if ((personalMovieDB.count >= 10) || (personalMovieDB.count < 30)) {
			alert ('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert ('Вы киноман');
		} else {alert ('Произошла ошибка');}
	},
	showMyDB: function() {
		if (!personalMovieDB.privat) {
			console.log(personalMovieDB.privat, personalMovieDB);
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let a = prompt(`Ваш любимый жанр под номером ${i}`);
			if (a == null || a == '') {
				console.log ("Вы ввели некорректные данные!");
				i--;
				continue;
			}
			personalMovieDB.genres[i-1] = a;
		};
	
		
		personalMovieDB.genres.forEach(function (item, i) {
			console.log(`Любимый жанр #${i+1} - это ${item}`);
		});
		
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat == false) {
			personalMovieDB.privat = true; 
		}
		else {
			personalMovieDB.privat = false;
		}
	}
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();

personalMovieDB.toggleVisibleMyDB();



// function rememberMyFilms() {

// let filmName = '';
// let filmScore = '';

// for (let i=0; i<=1; i++)  {

// 	do {filmName = prompt('Один из последних просмотренных фильмов?');} 
// 	while ( filmName == '' || filmName == 0 || filmName == null || filmName.length > 50);
// 	do {filmScore = prompt('На сколько оцените его?');}
// 	while ( filmScore == '' || filmScore == 0 || filmScore == null || +filmScore > 100);
	
// 	personalMovieDB.movies[filmName] = filmScore;
// }

// console.log(personalMovieDB);

// let i1 = 0;

// while (i1<2)  {

// 	do {filmName = prompt('Один из последних просмотренных фильмов?');} 
// 	while ( filmName == '' || filmName == 0 || filmName == null || filmName.length > 50);
// 	do {filmScore = prompt('На сколько оцените его?');}
// 	while ( filmScore == '' || filmScore == 0 || filmScore == null || +filmScore > 100);
	
// 	personalMovieDB.movies[filmName] = filmScore;
// 	i1++;
// }

// console.log(personalMovieDB);

// }

// rememberMyFilms();

console.log(personalMovieDB);
personalMovieDB.showMyDB();
