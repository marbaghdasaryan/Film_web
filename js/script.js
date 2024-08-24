/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img");
const poster = document.querySelector(".promo__bg")
const genre = document.querySelector(".promo__genre");
const moviesList = document.querySelector(".promo__interactive-list");

adv.forEach(item => item.remove());
genre.textContent = "ДРАМА";
poster.style.backgroundImage = "url(img/bg.jpg)";

movieDB.movies.sort().forEach((movietitles, i) => {
    moviesList.innerHTML += `
        <ul class="promo__interactive-item">
            ${i + 1}. 
            ${movietitles}
            <div class="delete"></div>
        </ul>
    `;
});
