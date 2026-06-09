console.log(
    "%c Пошук ПОСТІВ (карток) ",
    "color: white; background-color: #D33F49",
);
//! === Імпорт json-файлу для створення data ===
import data from "../json/pracrice-39_filter-only.json"
console.log("data:",data);

//! пошук необхідних елементів 
const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cards');
const counterEl = document.getElementById('counter');

//! Первинне відображення всіх карток
renderCards(data);

//! Cлухаємо введення даних в інпут
searchInput.addEventListener('input', filtersInputData); //! без debounce

//! блок функцій 
//! отримуэ дані з інпуту та передає їх далі 
function filtersInputData(event) {
    const value = event.target.value.toLowerCase().trim();
    console.log("value:",value);
    filterCards(value);
};

//! Функція фільтрації карток
function filterCards(keyword) {
    //! отримати дані з фукції filtersInputData = keyword ✅
    const filtered = data.filter(item =>
item.title.toLowerCase().includes(keyword)
    );
    updateCounter(filtered.length);
    renderCards(filtered);
    

}
//! Функція оновлення лічильника
function updateCounter(count) {
    counterEl.textContent = `Знайдено: ${count}`;
};
//! Функція для відображення карток після ДО та ПІСЛЯ фільтрації
function renderCards(items) {
 cardsContainer.innerHTML = ""
 items.forEach(item => {
    const card = document.createElement("li")
    card.classList.add("card")
    card.innerHTML =`
    <h3>${item.title}</h3>
    <p>${item.body}</p>
    `;
    cardsContainer.appendChild(card);
    
 });
};



