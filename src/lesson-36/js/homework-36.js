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

const confirmTitle = document.querySelector(".confirm-modal h2");
const confirmText = document.querySelector(".confirm-modal p");

const searchBox = document.querySelector(".search-box");
const infoBox = document.querySelector(".info-box");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
searchBox.hidden = true;
infoBox.hidden = true;
prevBtn.hidden = true;
nextBtn.hidden = true;
//? ================= STATE =================
let currentPage = 1;
let totalPosts = 0;
let totalPages = 0;
let allPosts = [];
let newPostData = null;
let postIdToDelete = null;
let postIdToEdit = null;
let activeCommentPostId = null;
let currentPosts = [];

//? ================= LISTENERS =================
fetchBtn.addEventListener("click", getAllPosts);

prevBtn.addEventListener("click", prevPage);
nextBtn.addEventListener("click", nextPage);

searchInput.addEventListener("input", filtersInputData);

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});

createPostForm.addEventListener("submit", handleCreateFormSubmit);
confirmBtn.addEventListener("click", handleConfirmAction);
rejectBtn.addEventListener("click", closeConfirmModal);

confirmBackdrop.addEventListener("click", (event) => {
  if (event.target === confirmBackdrop) {
    closeConfirmModal();
  }
});
postsList.addEventListener("click", handlePostButtons);
postsList.addEventListener("submit", handleCommentSubmit);
//! ================= GET ALL POSTS =================
async function getAllPosts() {
  const limit = Number(inputLimit.value);
  let page = Number(inputPage.value);
  console.log("limit:", limit);
  if (limit < 1 || limit > 10) {
    alert("Кількість постів на сторінці повАинна бути від 1 до 10");
    return;
  }

  if (page < 1) {
    alert("Номер сторінки не може бути менше 1");
    return;
  }

  try {
    const searchParams = createSearchParams();
    console.log("рядок запиту:", `${BaseURL}${EndPoint}?${searchParams}`);
    const response = await fetch(`${BaseURL}${EndPoint}?${searchParams}`);

    //! якщо я хочу то можу перенести код в catch
    // if (!response.ok) {
    //   throw new Error(`Помилка сервера: ${response.status}`);
    // }

    const data = await response.json();

    console.log("data:", data);

    allPosts = data.data;
    currentPosts = allPosts;

    totalPosts = data.items;
    totalPages = data.pages;

    console.log("allPosts:", allPosts);
    console.log("totalPosts:", totalPosts);
    console.log("totalPages:", totalPages);

    if (page > totalPages && totalPages > 0) {
      alert(
        `Сторінки № ${page} не існує.\nВсього сторінок: ${totalPages}.\nБуде показана остання сторінка.`,
      );

      page = totalPages;
      inputPage.value = totalPages;
    }

    currentPage = page;

    // currentPosts = getPostsForPage(allPosts);
    console.log("currentPosts:", currentPosts); //! ?
    updateInfo();
    // renderPosts(currentPosts);
    renderPosts(currentPosts);
    searchBox.hidden = false;
    infoBox.hidden = false;
    prevBtn.hidden = false;
    nextBtn.hidden = false;
    searchInput.value = "";
    searchCounterEl.textContent = "";
  } catch (error) {
    console.error("Помилка getAllPosts:", error);


    postsList.innerHTML = `
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `;
  }
}

//! ================= PAGINATION =================
// function getPostsForPage(posts) {
//   console.log("posts:", posts);
// const limit = Number(inputLimit.value);
// const startIndex = (currentPage - 1) * limit;
// const endIndex = startIndex + limit;

//   currentPosts = posts;
//   console.log("currentPosts:", currentPosts);
//   renderPosts(currentPosts);
// }

//! ================= UPDATE INFO =================
function updateInfo() {
  totalPostsEl.textContent = totalPosts;
  currentPageEl.textContent = currentPage;
  totalPagesEl.textContent = totalPages;

  updatePaginationButtons();
}

//! ================= RENDER POSTS =================
function renderPosts(posts, keyword = "") {
  console.trace("renderPosts");
  console.log("activeCommentPostId:",activeCommentPostId);
  postsList.innerHTML = "";

  if (!posts.length) {
    postsList.innerHTML = "<li>Пости не знайдені 😕</li>";
    return;
  }

  const markup = posts
    .map(({ id, userId, title, body, comments = [] }) => {
      const commentsMarkup = comments.length
        ? comments
            .map(
              ({ author, text, createdAt }) => `
                <li class="comment-item">
                  <b>${author}</b>
                  <span class="comment-date">${createdAt}</span>
                  <p>${text}</p>
                </li>
              `,
            )
            .join("")
        : `<li class="empty-comments">Коментарів ще немає</li>`;

console.log(
  typeof id,
  id,
  typeof activeCommentPostId,
  activeCommentPostId
);

      return `
<li class="list-item">

<h3>${highlightText(title, keyword)}</h3>

<p><b>Post id:</b> ${id}</p>

<p><b>Author id:</b> ${userId}</p>

<p>${body}</p>

<div class="card-buttons">

<button
class="edit-btn"
data-id="${id}">
✏️ Edit
</button>

<button
class="delete-btn"
data-id="${id}">
🗑 Delete
</button>

<button
class="comment-btn"
data-id="${id}">
💬 Add comment
</button>

</div>

<div class="comments">

<h4>Comments</h4>

<ul>

${commentsMarkup}

</ul>

${
  activeCommentPostId === id
    ? `
<form class="comment-form" data-id="${id}">

<input
class="comment-author"
placeholder="Author"
required>

<textarea
class="comment-text"
placeholder="Comment"
required></textarea>

<div class="comment-buttons">

<button type="submit">
Save
</button>

<button
type="button"
class="cancel-comment">
Cancel
</button>

</div>

</form>
`
    : ""
}

</div>

</li>
`;
    })
    .join("");

  postsList.innerHTML = markup;
}

//! ================= SEARCH =================
function filtersInputData(event) {
  const keyword = event.target.value.toLowerCase().trim();

  console.log("Введене слово:", keyword);
  console.log("Кількість постів у allPosts:", allPosts.length);

  filterPosts(keyword);
}

//! Пошук
function filterPosts(keyword) {
  if (allPosts.length === 0) {
    console.warn("Пости ще не завантажені.");
    return;
  }

  prevBtn.hidden = true;
  nextBtn.hidden = true;

if (keyword === "") {

  renderPosts(currentPosts);

  searchCounterEl.textContent = "";

  prevBtn.hidden = false;
  nextBtn.hidden = false;

  return;
}

  const filteredPosts = currentPosts.filter(({ title }) =>
    title.toLowerCase().includes(keyword),
  );

  console.log("Знайдені пости:", filteredPosts);
  console.log("Кількість знайдених:", filteredPosts.length);

  updateCounter(filteredPosts.length);
  renderPosts(filteredPosts, keyword);
}

//! ================= SEARCH COUNTER =================
function updateCounter(count) {
  searchCounterEl.textContent = `Знайдено: ${count} ${getWordForm(count, [
    "пост",
    "пости",
    "постів",
  ])}`;
}

//! ================= HIGHLIGHT TITLE =================
function highlightText(text, keyword) {
  if (!keyword) {
    return text;
  }

  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(`(${escapedKeyword})`, "gi");

  return String(text).replace(regex, `<span class="highlight">$1</span>`);
}

//! ================= WORD FORM =================
function getWordForm(number, words) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return words[2];
  }

  if (n1 > 1 && n1 < 5) {
    return words[1];
  }

  if (n1 === 1) {
    return words[0];
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

    postIdToEdit = null;

}
function openConfirmModal(title, text, buttonText) {

  confirmTitle.textContent = title;

  confirmText.textContent = text;

  confirmBtn.textContent = buttonText;

  confirmBackdrop.classList.remove("is-hidden");

}

function closeConfirmModal() {

  confirmBackdrop.classList.add("is-hidden");

  confirmTitle.textContent = "Підтвердження";

  confirmText.textContent = "Ви впевнені?";

  confirmBtn.textContent = "Підтвердити";

  postIdToDelete = null;

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

if (postIdToEdit !== null) {

    openConfirmModal(
        "Редагування поста",
        "Зберегти зміни?",
        "Зберегти"
    );

} else {

    openConfirmModal(
        "Створення поста",
        "Ви дійсно хочете створити цей пост?",
        "Створити"
    );

}
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
    console.error("Помилка createPost:", error);
    alert("Не вдалося створити пост");
  }
}

async function updatePost() {

    try {

        const response = await fetch(
            `${BaseURL}${EndPoint}/${postIdToEdit}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPostData),
            }
        );

        if (!response.ok) {
            throw new Error(`Помилка редагування: ${response.status}`);
        }

        closeConfirmModal();
        closeModal();

        postIdToEdit = null;

        await getAllPosts();

    } catch (error) {

        console.error("Помилка updatePost:", error);

        alert("Не вдалося оновити пост.");

    }

}

async function handleConfirmAction() {

    if (postIdToDelete !== null) {

        await deletePost(postIdToDelete);

        return;

    }

    if (postIdToEdit !== null) {

        await updatePost();

        return;

    }

    await createPost();

}

async function deletePost(postId) {
  console.log("postId:", postId);
console.log("URL:", `${BaseURL}${EndPoint}/${postId}`);
  try {
    const response = await fetch(`${BaseURL}${EndPoint}/${postId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Помилка видалення: ${response.status}`);
    }

    postIdToDelete = null;

    closeConfirmModal();

    await getAllPosts();
  } catch (error) {
    console.error("Помилка deletePost:", error);

    alert("Не вдалося видалити пост.");
  }
}

async function prevPage() {
  if (currentPage === 1) {
    return;
  }

  currentPage--;

  inputPage.value = currentPage;

  await getAllPosts();
}

async function nextPage() {
  if (currentPage === totalPages) {
    return;
  }

  currentPage++;

  inputPage.value = currentPage;

  await getAllPosts();
}

function updatePaginationButtons() {
  prevBtn.disabled = currentPage === 1;

  nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

function createSearchParams() {
  const params = new URLSearchParams({
    _page: inputPage.value,
    _per_page: inputLimit.value,
  });

  return params.toString();
}

//! ================= CARD BUTTONS =================

function handlePostButtons(event) {
  console.log("Edit натиснули");
  const editBtn = event.target.closest(".edit-btn");

if (editBtn) {

    postIdToEdit = Number(editBtn.dataset.id);

console.log(postIdToEdit);
console.log(currentPosts);

const post = currentPosts.find(
    ({ id }) => Number(id) === postIdToEdit
);

    console.log(post);

    if (!post) return;

    userIdInput.value = post.userId;
    titleInput.value = post.title;
    bodyInput.value = post.body;

    openModal();

    return;
}

  const deleteBtn = event.target.closest(".delete-btn");

  if (deleteBtn) {
    postIdToDelete = Number(deleteBtn.dataset.id);

    openConfirmModal(
  "Видалення поста",
  `Видалити пост №${postIdToDelete}?`,
  "Видалити"
);

    return;
  }

const commentBtn = event.target.closest(".comment-btn");

console.log("commentBtn:", commentBtn);

if (commentBtn) {

    console.log("ID =", commentBtn.dataset.id);

    activeCommentPostId = Number(commentBtn.dataset.id);

    console.log("active =", activeCommentPostId);

    renderPosts(currentPosts);

}
const cancelBtn = event.target.closest(".cancel-comment");

if (cancelBtn) {

    activeCommentPostId = null;

    renderPosts(currentPosts, searchInput.value.trim());

    return;

}
}


async function handleCommentSubmit(event) {

    event.preventDefault();

    const form = event.target;

    if (!form.classList.contains("comment-form")) {
        return;
    }

    const postId = Number(form.dataset.id);

    const author = form
        .querySelector(".comment-author")
        .value
        .trim();

    const text = form
        .querySelector(".comment-text")
        .value
        .trim();

    if (!author || !text) {
        alert("Заповніть усі поля.");
        return;
    }

    const post = currentPosts.find(
        ({ id }) => Number(id) === postId
    );

    if (!post) {
        return;
    }

    const comments = post.comments || [];

    const newComment = {
        id: Date.now(),
        author,
        text,
        createdAt: new Date().toLocaleString("uk-UA"),
    };

    comments.push(newComment);

    await saveComments(postId, comments);

}


async function saveComments(postId, comments) {

    try {

        const response = await fetch(
            `${BaseURL}${EndPoint}/${postId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comments,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Помилка PATCH");
        }

        activeCommentPostId = null;

        await getAllPosts();

    } catch (error) {

        console.error(error);

        alert("Не вдалося додати коментар.");

    }

}
//! ================= START =================
// getAllPosts();
// function fetchPost() {
//   const url = `${BaseURL}${EndPoint}?_page=${Number(inputPage.value)}&_per_page=${Number(inputLimit.value)}`;
//   console.log("url:", url);
// }
// fetchPost();
