const BaseURL = "http://localhost:3000/";
const EndPoint = "posts";

//? ================= INPUTS =================
const inputLimit = document.querySelector(".limit-input");
const inputPage = document.querySelector(".page-input");
const searchInput = document.querySelector(".search-input");

const userIdInput = document.querySelector(".user-id-input");
const titleInput = document.querySelector(".title-input");
const bodyInput = document.querySelector(".body-input");

//? ================= ELEMENTS =================
const fetchBtn = document.querySelector(".fetch-btn");
const postsList = document.querySelector(".posts-list");

const totalPostsEl = document.querySelector(".total-posts");
const currentPageEl = document.querySelector(".current-page");
const totalPagesEl = document.querySelector(".total-pages");
const searchCounterEl = document.querySelector(".search-counter");

const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const cancelBtn = document.querySelector(".cancel-btn");

const backdrop = document.querySelector(".backdrop");
const createPostForm = document.querySelector(".create-post-form");

const confirmBackdrop = document.querySelector(".confirm-backdrop");
const confirmBtn = document.querySelector(".confirm-btn");
const rejectBtn = document.querySelector(".reject-btn");

//? ================= STATE =================
let currentPage = 1;
let totalPosts = 0;
let totalPages = 0;

let allPosts = [];
let newPostData = null;

//? ================= LISTENERS =================
fetchBtn.addEventListener("click", getAllPosts);

searchInput.addEventListener("input", handleSearch);

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});

createPostForm.addEventListener("submit", handleCreateFormSubmit);

confirmBtn.addEventListener("click", createPost);
rejectBtn.addEventListener("click", closeConfirmModal);

confirmBackdrop.addEventListener("click", (event) => {
  if (event.target === confirmBackdrop) {
    closeConfirmModal();
  }
});

//! ================= GET ALL POSTS =================
async function getAllPosts() {
  const limit = Number(inputLimit.value);
  let page = Number(inputPage.value);

  if (limit < 1 || limit > 10) {
    alert("Кількість постів на сторінці повинна бути від 1 до 10");
    return;
  }

  if (page < 1) {
    alert("Номер сторінки не може бути менше 1");
    return;
  }

  try {
    const response = await fetch(`${BaseURL}${EndPoint}`);

    if (!response.ok) {
      throw new Error(`Помилка сервера: ${response.status}`);
    }

    allPosts = await response.json();

    totalPosts = allPosts.length;
    totalPages = Math.ceil(totalPosts / limit);

    if (page > totalPages && totalPages > 0) {
      alert(
        `Сторінки № ${page} не існує.\nВсього сторінок: ${totalPages}.\nБуде показана остання сторінка.`
      );

      page = totalPages;
      inputPage.value = totalPages;
    }

    currentPage = page;

    const postsForCurrentPage = getPostsForPage(allPosts);

    updateInfo();
    renderPosts(postsForCurrentPage);

    searchCounterEl.textContent = "";
    searchInput.value = "";
  } catch (error) {
    console.error(error);

    postsList.innerHTML = `
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `;
  }
}

//! ================= PAGINATION =================
// Вирізаємо потрібні пости з масиву для поточної сторінки
function getPostsForPage(posts) {
  const limit = Number(inputLimit.value);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  return posts.slice(startIndex, endIndex);
}

//! ================= UPDATE INFO =================
function updateInfo() {
  totalPostsEl.textContent = totalPosts;
  currentPageEl.textContent = currentPage;
  totalPagesEl.textContent = totalPages;
}

//! ================= RENDER =================
function renderPosts(posts) {
  if (!posts.length) {
    postsList.innerHTML = "<li>Пости не знайдені</li>";
    return;
  }

  postsList.innerHTML = posts
    .map(
      ({ id, userId, title, body }) => `
        <li class="list-item">
          <h3>${title}</h3>
          <p><b>Post id:</b> ${id}</p>
          <p><b>Author id:</b> ${userId}</p>
          <p>${body}</p>
        </li>
      `
    )
    .join("");
}

//! ================= SEARCH =================
function handleSearch(event) {
  const keyword = event.target.value.toLowerCase().trim();

  // Якщо поле пошуку пусте — повертаємо поточну сторінку
  if (!keyword) {
    const postsForCurrentPage = getPostsForPage(allPosts);

    renderPosts(postsForCurrentPage);
    searchCounterEl.textContent = "";

    return;
  }

  const filteredPosts = allPosts.filter(({ title, body }) => {
    return (
      title.toLowerCase().includes(keyword) ||
      body.toLowerCase().includes(keyword)
    );
  });

  renderPosts(filteredPosts);

  searchCounterEl.textContent = `Знайдено: ${
    filteredPosts.length
  } ${getWordForm(filteredPosts.length, ["пост", "пости", "постів"])}`;
}

//! ================= WORD FORM =================
function getWordForm(number, words) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return words[2];
  }

  if (lastDigit === 1) {
    return words[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return words[1];
  }

  return words[2];
}

//! ================= CREATE POST MODAL =================
function openModal() {
  backdrop.classList.remove("is-hidden");
}

function closeModal() {
  backdrop.classList.add("is-hidden");
  createPostForm.reset();
}

function openConfirmModal() {
  confirmBackdrop.classList.remove("is-hidden");
}

function closeConfirmModal() {
  confirmBackdrop.classList.add("is-hidden");
  newPostData = null;
}

//! ================= CREATE POST =================
function handleCreateFormSubmit(event) {
  event.preventDefault();

  const userId = Number(userIdInput.value);
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (userId < 1 || userId > 10) {
    alert("Ідентифікатор автора повинен бути числом від 1 до 10");
    return;
  }

  if (!title || !body) {
    alert("Заповніть усі поля");
    return;
  }

  newPostData = {
    userId,
    title,
    body,
  };

  openConfirmModal();
}

//! ================= POST REQUEST =================
async function createPost() {
  if (!newPostData) {
    return;
  }

  try {
    const response = await fetch(`${BaseURL}${EndPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostData),
    });

    if (!response.ok) {
      throw new Error(`Помилка створення: ${response.status}`);
    }

    const createdPost = await response.json();

    closeConfirmModal();
    closeModal();

    alert(`Пост створено. Його id: ${createdPost.id}`);


    await getAllPosts();
  } catch (error) {
    console.error(error);
    alert("Не вдалося створити пост");
  }
}

//! ================= START =================
getAllPosts();