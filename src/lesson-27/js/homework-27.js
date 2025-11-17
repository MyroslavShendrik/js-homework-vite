import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson27.hbs?raw";

// ============================================================================
// 🧠 КОМПІЛЯЦІЯ ШАБЛОНУ
// ============================================================================
const studentTemplate = Handlebars.compile(templateRaw);

// ============================================================================
// 💾 АНАЛІЗ LOCALSTORAGE
// ============================================================================
if (!localStorage.getItem("studentsList")) {
  localStorage.setItem("studentsList", "[]");
  console.log("Початковий стан localStorage:", localStorage.getItem("studentsList"));
} else {
  console.log("Наявність даних у localStorage:", localStorage.getItem("studentsList"));
}

// ============================================================================
// 📦 ОСНОВНІ ЗМІННІ
// ============================================================================
let dataArray = JSON.parse(localStorage.getItem("studentsList"));
let editStudentId = null ;
let nextStudentId = dataArray.length ? Math.max(...dataArray.map(s => s.id)) + 1 : 1;



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
const formTitle =document.getElementById("form-title");

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
function addStudent() {
  dataArray = JSON.parse(localStorage.getItem("studentsList")) ;
  console.log("Перед додаванням студента, dataArray:", dataArray);
  formTitle.textContent = "Нова картка студента";
  studentFormElement.reset(); //! додати цю логіку в кінці роботи форми 
  editStudentId = null;
  console.log("Відкрито форму для нового студента");
  toggleModal(modalFormElement);
}

// 2. Відправлення форми “Зберегти”
function handleSubmitForm(event) {
  event.preventDefault();

  dataArray = JSON.parse(localStorage.getItem("studentsList")) || [];
  console.log("Перед збереженням, dataArray:", dataArray);

  const formData = new FormData(studentFormElement);
  const studentData = Object.fromEntries(formData.entries());
  studentData.age = Number(studentData.age);
  studentData.course = Number(studentData.course);

  if (editStudentId !== null) {
    const studentIndex = dataArray.findIndex(s => s.id === editStudentId);
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
  toggleModal(modalFormElement);
}

// 3. Клік по картці студента (редагування / видалення)
function handleStudentCardClick(event) {
 if(event.target.classList.contains("edit-btn") || event.target.classList.contains("delete-btn")){
  console.log("Клік по картці студента (редагування / видалення)");
 editStudentId = Number(event.target.parentNode.parentNode.dataset.id);
 console.log("editStudentId:",editStudentId);
 } else return;
 
  dataArray = JSON.parse(localStorage.getItem("studentsList"));
  console.log("Перед редагуванням/видаленням, dataArray:", dataArray);

  const currentStudent = dataArray.find(s => s.id === editStudentId);

  if (event.target.classList.contains("edit-btn")) {
    // openForm("Редагування студента");
    document.getElementById("form-title").textContent = "Редагування студента";
    toggleModal(modalFormElement);
    studentFormElement.firstName.value = currentStudent.firstName;
    studentFormElement.lastName.value = currentStudent.lastName;
    studentFormElement.age.value = currentStudent.age;
    studentFormElement.course.value = currentStudent.course;
    studentFormElement.faculty.value = currentStudent.faculty;

  }

  if (event.target.classList.contains("delete-btn")) {
    console.log("Видалити картку студента")
    confirmTextElement.textContent = `Видалити картку студента ${currentStudent.firstName}?`;
    toggleModal(modalConfirmElement);
  }
}

// 4. Підтвердження видалення
function handleConfirmDelete() {
  dataArray = dataArray.filter(s => s.id !== editStudentId);
  console.log("editStudentId видалення:",editStudentId) 
  updateJSON();
  renderStudentsList(dataArray);
  toggleModal(modalConfirmElement);
}

// 5. Закриття модальних вікон
function handleCloseModal(event) {
  if (event.target.dataset.close !== undefined) {
    const modalWindowElement = event.target.closest(".modal");
    toggleModal(modalWindowElement);
  }
}

// ============================================================================
// 🧠 ОСНОВНІ ФУНКЦІЇ
// ============================================================================

// --- Додає нового студента ---
function addStudent() {
  document.getElementById("form-title").textContent = "Нова картка студента";
  toggleModal(modalFormElement);
  studentFormElement.reset(); //! додати цю логіку в кінці роботи форми 
  editStudentId = null;
  console.log("Відкрито форму для нового студента");
  
}

// --- Оновлення JSON та localStorage ---
function updateJSON() {
  localStorage.setItem("studentsList", JSON.stringify(dataArray, null, 2));
}

// --- Рендер списку студентів ---
function renderStudentsList(array) {
  studentsListElement.innerHTML = "";
  console.log("Рендеримо dataArray:", array);
  array.forEach(studentItem => {
    studentsListElement.insertAdjacentHTML(
      "beforeend",
      studentTemplate(studentItem)
    );
  });
}

// --- Відкрити форму з заголовком ---
// function openForm(formTitle) {
//   const formTitleElement = document.getElementById("form-title");
//   formTitleElement.textContent = formTitle;
//   toggleModal(modalFormElement);
// }


function toggleModal(modalElement) {
  modalElement.classList.toggle("hidden");
}