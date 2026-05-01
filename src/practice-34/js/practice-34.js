//! ================= БАЗА =================
const BaseURL = "https://jsonplaceholder.typicode.com/";
const EndPoint = "posts";

const input1 = document.getElementById("input-elements"); // скільки елементів
const input2 = document.getElementById("input-pages");    // сторінка

const postsList = document.getElementById("posts-list");

const buttonFetch = document.getElementById("button-fetch");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//! ================= СТАН КНОПОК =================
// при старті
prevBtn.setAttribute("disabled", "");
nextBtn.setAttribute("disabled", "");
buttonFetch.removeAttribute("disabled");

//! ================= СЛУХАЧІ =================
buttonFetch.addEventListener('click', getAllPosts);

prevBtn.addEventListener("click", () => {
  let currentPage = Number(input2.value);

  if (currentPage <= 1) return;

  currentPage--;
  input2.value = currentPage;

  getAllPosts();
});

nextBtn.addEventListener("click", () => {
  let currentPage = Number(input2.value);

  currentPage++;
  input2.value = currentPage;

  getAllPosts();
});

//! ================= ГОЛОВНА ФУНКЦІЯ =================
function getAllPosts() {
  const limit = Number(input1.value);
  const page = Number(input2.value);

  if (limit < 1 || page < 1) {
    alert("введіть коректні значення в полях вводу");
    return;
  }

  fetchPosts(page, limit)
    .then(posts => {
      renderPosts(posts);

      // 🔥 після першого запиту
      // buttonFetch.setAttribute("disabled", "");
      nextBtn.removeAttribute("disabled");

      // prev тільки якщо сторінка > 1
      if (page > 1) {
        prevBtn.removeAttribute("disabled");
      } else {
        prevBtn.setAttribute("disabled", "");
      }
    })
    .catch(error => console.log(error));
}

//! ================= FETCH =================
function fetchPosts(page, limit) {
  const url = `${BaseURL}${EndPoint}?_page=${page}&_limit=${limit}`;

  console.log("url:", url);

  return fetch(url)
    .then(response => response.json());
}

//! ================= РЕНДЕР =================
function renderPosts(posts) {
  if (!posts.length) {
    postsList.innerHTML = "<p>Немає постів</p>";

    // якщо нічого нема — блокуємо next
    nextBtn.setAttribute("disabled", "");
    return;
  }

  const markup = posts.map(post => `
    <li class="list-item">
      <h3 class="list-title">${post.title}</h3>
      <p class="list-id">id: ${post.id}</p>
      <p class="list-text">${post.body}</p>
    </li>
  `).join('');

  postsList.innerHTML = markup;

  // якщо прийшло менше ніж limit — це остання сторінка
  if (posts.length < Number(input1.value)) {
    nextBtn.setAttribute("disabled", "");
  } else {
    nextBtn.removeAttribute("disabled");
  }
}