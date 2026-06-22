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
    renderCards(filtered, keyword);
    

}
//! Функція оновлення лічильника
function updateCounter(count) {
    counterEl.textContent = `Знайдено: ${count} ${getWordForm(count, ['картка', 'картки', 'карток'])}`;
};

//! Функція для відображення карток після ДО та ПІСЛЯ фільтрації
function renderCards(items, keyword = '') {
 cardsContainer.innerHTML = ""

 if (items.length === 0) {
        cardsContainer.innerHTML = '<p class="empty">Нічого не знайдено... 😕</p>';
        updateCounter(0);
        return;
    };

 items.forEach(item => {
    const card = document.createElement("li")
    card.classList.add("card")
    card.innerHTML =`
   <h3>${highlightText(item.title, keyword)}</h3>
    <p>${item.body}</p>
    `;
    cardsContainer.appendChild(card);
    
 });
};

//! Функція підсвічування тексту
function highlightText(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, `<span class="highlight">$1</span>`);
};


//! Функція для відмінювання слова “картка”
function getWordForm(number, words) {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return words[2];
    if (n1 > 1 && n1 < 5) return words[1];
    if (n1 === 1) return words[0];
    return words[2];
};



