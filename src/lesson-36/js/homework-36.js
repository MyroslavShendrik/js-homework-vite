const BaseURL = "http://localhost:3000/";
const EndPoint = "posts";

//? ================= INPUTS =================
const inputLimit = document.querySelector(".limit-input");
const inputPage = document.querySelector(".page-input");

//? ================= ELEMENTS =================
const fetchBtn = document.querySelector(".fetch-btn");
const postsList = document.querySelector(".posts-list");

const totalPostsEl = document.querySelector(".total-posts");
const currentPageEl = document.querySelector(".current-page");
const totalPagesEl = document.querySelector(".total-pages");

//? ================= MODAL =================
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const backdrop = document.querySelector(".backdrop");

//? ================= FORM =================
const createPostForm = document.querySelector(".create-post-form");
const userIdInput = document.querySelector(".user-id-input");
const titleInput = document.querySelector(".title-input");
const bodyInput = document.querySelector(".body-input");

//? ================= STATE =================
let currentPage = 1;
let allPosts = [];

//! ================= INIT =================
getCollectionInfo();

//? ================= LISTENERS =================
fetchBtn.addEventListener("click", getAllPosts);

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
createPostForm.addEventListener("submit", createPost);

//! ================= MAIN FUNCTION =================
async function getAllPosts() {
  const limit = Number(inputLimit.value) || 5;
  let page = Number(inputPage.value) || 1;

  if (limit < 1 || page < 1) {
    alert("Введіть коректні значення");
    return;
  }

  const totalPages = Math.ceil(allPosts.length / limit);

  if (page > totalPages) {
    alert(
      `Такої сторінки не існує.\nМаксимальна кількість сторінок: ${totalPages}`
    );

    page = totalPages;
    inputPage.value = totalPages;
  }

  currentPage = page;

  updateInfo();

  try {
    const posts = await fetchPosts(page, limit);

    renderPosts(posts.data);
  } catch (err) {
    console.error(err);
    postsList.innerHTML = "<li>Помилка завантаження</li>";
  }
}

//! ================= FETCH POSTS =================
async function fetchPosts(page, limit) {
  const response = await fetch(
    `${BaseURL}${EndPoint}?_page=${page}&_per_page=${limit}`
  );

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
}

//! ================= GET COLLECTION INFO =================
async function getCollectionInfo() {
  try {
    const response = await fetch(`${BaseURL}${EndPoint}`);

    if (!response.ok) {
      throw new Error("Network error");
    }

    allPosts = await response.json();

    updateInfo();
  } catch (error) {
    console.error(error);
  }
}

//! ================= INFO =================
function updateInfo() {
  const limit = Number(inputLimit.value) || 5;

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);

  totalPostsEl.textContent = totalPosts;
  currentPageEl.textContent = currentPage;
  totalPagesEl.textContent = totalPages;
}

//! ================= RENDER =================
function renderPosts(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    postsList.innerHTML = "<li>Немає постів</li>";
    return;
  }

  const markup = posts
    .map(
      (post) => `
      <li class="list-item">
        <h3>${post.title}</h3>
        <p>id: ${post.id}</p>
        <p>${post.body}</p>
      </li>
    `
    )
    .join("");

  postsList.innerHTML = markup;
}

//! ================= MODAL =================
function openModal() {
  backdrop.classList.remove("is-hidden");
}

function closeModal() {
  backdrop.classList.add("is-hidden");
}

//! ================= CREATE POST =================
async function createPost(event) {
  event.preventDefault();

  const userId = Number(userIdInput.value);
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!userId || !title || !body) {
    alert("Заповніть усі поля");
    return;
  }

  try {
    await addPost({
      userId,
      title,
      body,
    });

    createPostForm.reset();

    closeModal();

    await getCollectionInfo();
    await getAllPosts();

    alert("Пост успішно створений");
  } catch (error) {
    console.error(error);
    alert("Помилка створення поста");
  }
}

//! ================= ADD POST =================
async function addPost(post) {
  const response = await fetch(`${BaseURL}${EndPoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Не вдалося створити пост");
  }

  return response.json();
}