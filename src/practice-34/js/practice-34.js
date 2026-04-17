//! Пагінація
//? ✳️ База даних може зберігати колекції,
//? що містять сотні мільйонів записів.
//? Тому повертати всю колекцію на кожен
//? GET-запит - занадто ресурсозатратно.
//? Розмір тіла відповіді буде занадто великий,
//? і час запиту затягнеться на десятки секунд,
//? або навіть хвилини - чим більше даних
//? у відповіді від бекенду,
//? тим довше вона передається мережею.



//? ✳️ До того ж, необхідно думати про користувачів
//? - навряд чи їм потрібні усі мільйони записів відразу.
//? Обробка такої великої кількості даних у відповіді
//? і відображення інтерфейсу потребує величезних
//? ресурсів пристрою, на якому переглядається веб-сторінка.
//? За статистикою, користувачі знаходять цікаву
//? для них інформацію на декількох перших екранах.

//? ✴️ Припустимо наш бекенд my-api.com зберігає 
//? дуже велику колекцію постів у ресурсі /posts, 
//? яку зобразимо дванадцятьма елементами на ілюстрації.
console.warn(`Вся колекція: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_17/images/no-pagination.png"}`);
//? ✴️ На кожен GET-запит бекенду доведеться повернути
//? всю колекцію, і ми зіткнемося з проблемами,
//? описаними раніше.

//? ✴️ Для їх вирішення існує ПАГІНАЦІЯ - прийом, 
//? за яким, на перший і кожен наступний GET-запит 
//? повертається не вся колекція, а певна її частина. 
//? Пагінація реалізується на бекенді і використовується 
//? на фронтенді за допомогою спеціальних параметрів запиту.
console.log("--------------------------------------------------------------");
//! пошук довжини колекції 
const aray1 = [5,7,9,15,16]
const aray2 = [25,27,29,215,216,156,220]
const aray3 = [35,37,39]
function totalArrayElements(arr){
    console.log("arr:", arr);
    const finalArray = arr.length;
    console.log("finalArray:", finalArray);
return arr.length;
};

console.log(totalArrayElements(aray1));
console.log(totalArrayElements(aray2));
console.log(totalArrayElements(aray3));

//!робимо пагінацію 
const BaseURL = "https://jsonplaceholder.typicode.com/";
const EndPoint = "posts";
const perPage = 4;
const page = 10 ;
//!GET /posts?_page=1&_limit=25 - приклад запиту з урахуванням номера сторінки та кількості елементів на сторінці 
const params ={
    
}
//! загальна кількість елементів / на кількість елементів на сторінці = кількість сторінок 
const postsList = document.getElementById("posts-list");
//!Головна функція 
//? Викликає функцію, яка робить запит і передає дані на функцію, яка робить рендер 
function getAllPosts(){
fetchPosts()
.then(posts => renderPosts(posts))
.catch(error => console.log(error));
}
//? Функція робить запит на сервер 
function fetchPosts (){
return fetch(createSearchParams(BaseURL, EndPoint))
.then(response => response.json());
} 
//? відображення постів в розмітці
function renderPosts (posts){
const markup = posts.map(post =>{ return `
    <li class="list-item">
    <h3 class="list-title">${post.title}</h3>
    <p class="list-id"> id:${post.id} </p>
    <p class=list-text> ${post.body}</p>
    </li>
`}).join('')
postsList.innerHTML = markup;
}
//? Створує URL з параметрами
function createSearchParams(baseURL, endpoint){
    const url = `${baseURL}${endpoint}`
    return url; 
}
getAllPosts()