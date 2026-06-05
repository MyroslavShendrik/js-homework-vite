const BaseURL = "http://localhost:3000/";
const EndPoint = "posts";

//? ================= INPUTS     =================
const inputLimit = document.querySelector(".limit-input");
const inputPage = document.querySelector(".page-input");

//? ================= ELEMENTS =================
const fetchBtn = document.querySelector(".fetch-btn");
const postsList = document.querySelector(".posts-list");

const totalPostsEl = document.querySelector(".total-posts");
const currentPageEl = document.querySelector(".current-page");
const totalPagesEl = document.querySelector(".total-pages");

//? ================= STATE =================
let currentPage = 1;
let allPosts = [];

//! ================= INIT =================
getCollectionInfo();

//? ================= LISTENER =================
fetchBtn.addEventListener("click", getAllPosts);

//! ================= MAIN FUNCTION =================
async function getAllPosts() {
  
  const limit = Number(inputLimit.value) || 5;
  const page = Number(inputPage.value) || 1;

  if (limit < 1 || page < 1) {
    alert("Введіть коректні значення");
    return;
  }

  currentPage = page;

  updateInfo();
try{
 const posts= await fetchPosts(page, limit)
 
    renderPosts(posts.data);
}catch(err)  {
      console.error(err);
      postsList.innerHTML = "<li>Помилка завантаження</li>";
    };
}

//! ================= FETCH POSTS =================
async function fetchPosts(page, limit) {
  // console.log(`${BaseURL}${EndPoint}?_page=${page}&_per_page=${limit}`)
  // return fetch(
  //   `${BaseURL}${EndPoint}?_page=${page}&_per_page=${limit}`
  //   //* pagination /posts?_page=1&_per_page=10 
  // ).then((res) => {
    
  //   if (!res.ok) {
  //     throw new Error("Network error");
  //   }

  //   return res.json();
  // });
  const response = await fetch(`${BaseURL}${EndPoint}?_page=${page}&_per_page=${limit}`);
  const dataObject = await response.json()
  console.log("dataObject:",dataObject);
  return dataObject
}

//! ================= GET ALL POSTS =================
async function getCollectionInfo() {
  try {
const response = await fetch(`${BaseURL}${EndPoint}`);


    if (!response.ok) {
      throw new Error("Network error");
    }

    allPosts = await response.json();
   console.log("allPosts:",allPosts);
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
  console.log("posts:",posts);
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