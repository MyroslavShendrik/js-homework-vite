const input = document.getElementById('count');
const button = document.getElementById('get-data');
const dataList = document.getElementById('data-list');

const BASE_URL = 'https://newsapi.org/v2/everything';

button.addEventListener('click', () => {
  const count = input.value;

  const searchParams = new URLSearchParams({
    q: 'apple',
    sortBy: 'popularity',
    pageSize: count,
    apiKey: '639ac27a9d1f4a569d7448e2fa14c42d',
  });
  console.log("url:",`${BASE_URL}?${searchParams}`);

  fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Помилка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      dataList.innerHTML = '';

      data.articles.forEach(article => {
        const li = document.createElement('li');
        li.textContent = article.title;
        dataList.appendChild(li);
      });
    })
    .catch(error => {
      console.log('Помилка:', error);
    });
});