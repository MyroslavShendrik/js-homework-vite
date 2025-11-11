import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson27.hbs?raw";

// компілюю шаблон
const studentTemplate = Handlebars.compile(templateRaw);

//! --- АНАЛІЗ LOCALSTORAGE ---
if (localStorage.getItem("studentsList")) {
  console.log("наявність даних в localStorage:", localStorage.getItem("studentsList"));
} else {
  localStorage.setItem("studentsList", "[]");
  console.log("початковий стан localStorage:", localStorage.getItem("studentsList"));
}

//! --- ОСНОВНІ ЗМІННІ ---
let dataArray = JSON.parse(localStorage.getItem("studentsList"));
let dataJSON = "";
let editStudentId = null;
let nextStudentId = 1;
let deleteStudentId = null;

//! --- HTML-ЕЛЕМЕНТИ ---
const studentsListElement = document.getElementById("students-list");
const modalFormElement = document.getElementById("modal-form");
const modalConfirmElement = document.getElementById("modal-confirm");
const studentFormElement = document.getElementById("student-form");
const confirmTextElement = document.getElementById("confirm-text");
const confirmYesButtonElement = document.getElementById("btn-confirm-yes");
const btnAddStudent = document.getElementById("btn-add-student");

//! --- РЕНДЕР СПИСКУ СТУДЕНТІВ ПРИ ЗАПУСКУ ---
renderStudentsList(dataArray);



// ============================================================================
// 🎧 СЛУХАЧІ ПОДІЙ
// ============================================================================

// 1. Кнопка “Додати студента”
btnAddStudent.addEventListener("click", addStudent);

// 2. Подання форми “Зберегти”
studentFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(studentFormElement);
  const studentData = Object.fromEntries(formData.entries());

  // Переводжу числові значення
  studentData.age = Number(studentData.age);
  studentData.course = Number(studentData.course);

  // Якщо редагування
  if (editStudentId !== null) {
    const studentIndex = dataArray.findIndex(
      (studentItem) => studentItem.id === editStudentId
    ); 
    //! забрати з локал сторедж найсвіжіші дані (забираю найостаннішу версію даних)
    dataArray = JSON.parse(localStorage.getItem("studentsList"));
    dataArray[studentIndex] = { ...dataArray[studentIndex], ...studentData };
    console.log("Відредаговано студента:", dataArray[studentIndex]);
    editStudentId = null;
  } else {
    // Якщо новий студент
    studentData.id = nextStudentId++;
    dataArray.push(studentData);
    console.log("Додано студента:", studentData);
  }

  updateJSON();
  renderStudentsList(dataArray);
  closeModal(modalFormElement);
});

// 3. Клік по картках студентів (редагування / видалення)
studentsListElement.addEventListener("click", (event) => {
  const cardElement = event.target.closest(".student-card");
  if (!cardElement) return;

  const currentStudentId = Number(cardElement.dataset.id);
  const currentStudent = dataArray.find(
    (studentItem) => studentItem.id === currentStudentId
  );

  // Якщо натиснуто “Редагувати”
  if (event.target.classList.contains("edit-btn")) {
    openForm("Редагування студента");
    studentFormElement.firstName.value = currentStudent.firstName;
    studentFormElement.lastName.value = currentStudent.lastName;
    studentFormElement.age.value = currentStudent.age;
    studentFormElement.course.value = currentStudent.course;
    studentFormElement.faculty.value = currentStudent.faculty;
    editStudentId = currentStudentId;
  }

  // Якщо натиснуто “Видалити”
  if (event.target.classList.contains("delete-btn")) {
    deleteStudentId = currentStudentId;
    confirmTextElement.textContent = `Видалити картку студента ${currentStudent.firstName}?`;
    openModal(modalConfirmElement);
  }
});

// 4. Підтвердження видалення
confirmYesButtonElement.addEventListener("click", () => {
  dataArray = dataArray.filter(
    (studentItem) => studentItem.id !== deleteStudentId
  );
  deleteStudentId = null;
  updateJSON();
  renderStudentsList(dataArray);
  closeModal(modalConfirmElement);
});

// 5. Закриття модальних вікон
document.body.addEventListener("click", (event) => {
  if (event.target.dataset.close !== undefined) {
    const modalWindowElement = event.target.closest(".modal");
    closeModal(modalWindowElement);
  }
});



// ============================================================================
// ⚙️ ФУНКЦІЇ
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
