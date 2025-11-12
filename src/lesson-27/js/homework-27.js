import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson27.hbs?raw";

// ============================================================================
// 🧠 КОМПІЛЯЦІЯ ШАБЛОНУ
// ============================================================================
const studentTemplate = Handlebars.compile(templateRaw);

// ============================================================================
// 💾 АНАЛІЗ LOCALSTORAGE
// ============================================================================
if (localStorage.getItem("studentsList")) {
  console.log(
    "Наявність даних у localStorage:",
    localStorage.getItem("studentsList")
  );
} else {
  localStorage.setItem("studentsList", "[]");
  console.log(
    "Початковий стан localStorage:",
    localStorage.getItem("studentsList")
  );
}

// ============================================================================
// 📦 ОСНОВНІ ЗМІННІ
// ============================================================================
let dataArray = JSON.parse(localStorage.getItem("studentsList"));
let dataJSON = "";
let editStudentId = null;
let nextStudentId = 1;
let deleteStudentId = null;

// ============================================================================
// 🧩 HTML-ЕЛЕМЕНТИ
// ============================================================================
const studentsListElement = document.getElementById("students-list");
const modalFormElement = document.getElementById("modal-form");
const modalConfirmElement = document.getElementById("modal-confirm");
const studentFormElement = document.getElementById("student-form");
const confirmTextElement = document.getElementById("confirm-text");
const confirmYesButtonElement = document.getElementById("btn-confirm-yes");
const btnAddStudent = document.getElementById("btn-add-student");

// ============================================================================
// 🚀 РЕНДЕР СПИСКУ СТУДЕНТІВ ПРИ ЗАПУСКУ
// ============================================================================
renderStudentsList(dataArray);

// ============================================================================
// 🎧 СЛУХАЧІ ПОДІЙ
// ============================================================================
btnAddStudent.addEventListener("click", handleAddStudentClick);
studentFormElement.addEventListener("submit", handleSubmitForm);
studentsListElement.addEventListener("click", handleStudentCardClick);
confirmYesButtonElement.addEventListener("click", handleConfirmDelete);
document.body.addEventListener("click", handleCloseModal);

// ============================================================================
// ⚙️ ФУНКЦІЇ-СЛУХАЧІ
// ============================================================================

// 1. Натискання “Додати студента”
function handleAddStudentClick() {
  addStudent();
}

// 2. Відправлення форми “Зберегти”
function handleSubmitForm(event) {
  event.preventDefault();

  const formData = new FormData(studentFormElement);
  const studentData = Object.fromEntries(formData.entries());
  studentData.age = Number(studentData.age);
  studentData.course = Number(studentData.course);

  if (editStudentId !== null) {
    const studentIndex = dataArray.findIndex(
      (studentItem) => studentItem.id === editStudentId
    );

    dataArray = JSON.parse(localStorage.getItem("studentsList"));
    dataArray[studentIndex] = { ...dataArray[studentIndex], ...studentData };

    console.log("Відредаговано студента:", dataArray[studentIndex]);
    editStudentId = null;
  } else {
    studentData.id = nextStudentId++;
    dataArray.push(studentData);
    console.log("Додано студента:", studentData);
  }

  updateJSON();
  renderStudentsList(dataArray);
  closeModal(modalFormElement);
}

// 3. Клік по картці студента (редагування / видалення)
function handleStudentCardClick(event) {
  const cardElement = event.target.closest(".student-card");
  if (!cardElement) return;

  const currentStudentId = Number(cardElement.dataset.id);
  const currentStudent = dataArray.find(
    (studentItem) => studentItem.id === currentStudentId
  );

  if (event.target.classList.contains("edit-btn")) {
    openForm("Редагування студента");
    studentFormElement.firstName.value = currentStudent.firstName;
    studentFormElement.lastName.value = currentStudent.lastName;
    studentFormElement.age.value = currentStudent.age;
    studentFormElement.course.value = currentStudent.course;
    studentFormElement.faculty.value = currentStudent.faculty;
    editStudentId = currentStudentId;
  }

  if (event.target.classList.contains("delete-btn")) {
    deleteStudentId = currentStudentId;
    confirmTextElement.textContent = `Видалити картку студента ${currentStudent.firstName}?`;
    openModal(modalConfirmElement);
  }
}

// 4. Підтвердження видалення
function handleConfirmDelete() {
  dataArray = dataArray.filter(
    (studentItem) => studentItem.id !== deleteStudentId
  );
  deleteStudentId = null;
  updateJSON();
  renderStudentsList(dataArray);
  closeModal(modalConfirmElement);
}

// 5. Закриття модальних вікон
function handleCloseModal(event) {
  if (event.target.dataset.close !== undefined) {
    const modalWindowElement = event.target.closest(".modal");
    closeModal(modalWindowElement);
  }
}

// ============================================================================
// 🧠 ОСНОВНІ ФУНКЦІЇ
// ============================================================================

// --- Додає нового студента ---
function addStudent() {
  openForm("Нова картка студента");
  studentFormElement.reset();
  editStudentId = null;
  console.log("Відкрито форму для нового студента");
}

// --- Оновлення JSON та localStorage ---
function updateJSON() {
  dataJSON = JSON.stringify(dataArray, null, 2);
  console.log("dataJSON:", dataJSON);
  localStorage.setItem("studentsList", dataJSON);
}

// --- Рендер списку студентів ---
function renderStudentsList(array) {
  studentsListElement.innerHTML = "";
  console.log("dataArray:", array);
  array.forEach((studentItem) => {
    studentsListElement.insertAdjacentHTML(
      "beforeend",
      studentTemplate(studentItem)
    );
  });
}

// --- Відкрити форму з заголовком ---
function openForm(formTitle) {
  const formTitleElement = document.getElementById("form-title");
  formTitleElement.textContent = formTitle;
  openModal(modalFormElement);
}

// --- Відкрити будь-яке модальне вікно ---
function openModal(modalElement) {
  modalElement.classList.remove("hidden");
}

// --- Закрити будь-яке модальне вікно ---
function closeModal(modalElement) {
  modalElement.classList.add("hidden");
}
