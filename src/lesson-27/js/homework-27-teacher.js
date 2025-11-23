import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson27.hbs?raw";

// ============================================================================
//todo 🧠 КОМПІЛЯЦІЯ ШАБЛОНУ
// ============================================================================
const studentTemplate = Handlebars.compile(templateRaw);

// ============================================================================
//todo 💾 АНАЛІЗ Local Storage
// ============================================================================
if (!localStorage.getItem("studentsList")) {
  localStorage.setItem("studentsList", "[]");
  console.log("Початковий стан localStorage:", localStorage.getItem("studentsList"));
} else {
  console.log("Наявність даних у localStorage:", localStorage.getItem("studentsList"));
};

// ============================================================================
//todo 📦 ОСНОВНІ ЗМІННІ
// ============================================================================
let dataArray = JSON.parse(localStorage.getItem("studentsList")); //!
console.log("dataArray:", dataArray); //!
let editStudentId;

// ============================================================================
//todo 🧩 HTML-ЕЛЕМЕНТИ
// ============================================================================
const btnAddStudent = document.getElementById("btn-add-student");
const studentsListElement = document.getElementById("students-list");
const modalFormElement = document.getElementById("modal-form");
const studentFormElement = document.getElementById("student-form");
const formTitle = document.getElementById("form-title");
const cancelButton = document.getElementById("btn-close"); //!

const modalConfirmElement = document.getElementById("modal-confirm");
const confirmTextElement = document.getElementById("confirm-text");
const confirmYesButtonElement = document.getElementById("btn-confirm-yes");
const confirmNoButtonElement = document.getElementById("btn-close-confirm"); //!


// ============================================================================
//todo 🚀 РЕНДЕР СПИСКУ СТУДЕНТІВ ПРИ ЗАПУСКУ
// ============================================================================
renderStudentsList(dataArray);

// ============================================================================
//todo 🎧 СЛУХАЧІ ПОДІЙ
// ============================================================================
btnAddStudent.addEventListener("click", addStudent);
studentsListElement.addEventListener("click", handleStudentCardClick);
studentFormElement.addEventListener("submit", handleSubmitForm);
cancelButton.addEventListener("click", () => toggleModal(modalFormElement));

confirmYesButtonElement.addEventListener("click", handleConfirmDelete);
confirmNoButtonElement.addEventListener("click", () => toggleModal(modalConfirmElement));
// document.body.addEventListener("click", handleCloseModal);

// ============================================================================
//todo ⚙️ ФУНКЦІЇ для СЛУХАЧІВ
// ============================================================================
//! 1. Натискання кнопки “Додати студента”
function addStudent() {
  updateData(); //!
  console.log("Перед додаванням студента, dataArray:", dataArray);
  studentFormElement.reset();
  formTitle.textContent = "Нова картка студента"; //!+++
  console.log("Відкрито форму для нового студента");
  toggleModal(modalFormElement); //!
}


//! 2. Клік по картці студента (редагування/видалення)
function handleStudentCardClick(event) {
  if (event.target.classList.contains('edit-btn') || event.target.classList.contains('delete-btn')) {
    console.log("Клік по картці студента (редагування / видалення)"); //!
    editStudentId = Number(event.target.parentNode.parentNode.dataset.id);
    console.log("id для ВИДАЛЕННЯ та РЕДАГУВАННЯ:", editStudentId);  //!
  } else return;
  updateData(); //!
  console.log("Перед редагуванням/видаленням, dataArray:", dataArray);
  const currentStudent = dataArray.find(item => item.id === editStudentId);
  //! Редагування
  if (event.target.classList.contains("edit-btn")) {
    formTitle.textContent = "Редагування студента"; //!+++
    console.log("currentStudent:", currentStudent);
    console.log("studentFormElement:", studentFormElement);
    //! заповнення форми v.1
    studentFormElement.firstName.value = currentStudent.firstName;
    studentFormElement.lastName.value = currentStudent.lastName;
    studentFormElement.age.value = currentStudent.age;
    studentFormElement.course.value = currentStudent.course;
    studentFormElement.faculty.value = currentStudent.faculty;
    toggleModal(modalFormElement); //!
  }
  //! Видалення
  if (event.target.classList.contains("delete-btn")) {
    confirmTextElement.textContent = `Видалити картку студента ${currentStudent.firstName}?`;
    toggleModal(modalConfirmElement); //!
  };
};

//! 3. Підтвердження форми кнопкою “Зберегти” при Додаванні/Редагуванні
function handleSubmitForm(event) {
  event.preventDefault();
  updateData(); //!
  console.log("Перед збереженням, dataArray:", dataArray);
  //! заповнення форми v.2
  const formData = new FormData(studentFormElement);
  const studentData = Object.fromEntries(formData.entries());
  studentData.age = Number(studentData.age);
  studentData.course = Number(studentData.course);
  //! логіка додавання id при Редагуванні
  if (formTitle.textContent === "Редагування студента") {
    dataArray[editStudentId] = { ...dataArray[editStudentId], ...studentData };
    console.log("Відредаговано студента:", dataArray[editStudentId]);
  } else {
    //! логіка додавання id при Додаванні
    studentData.id = dataArray.length; //!
    dataArray.push(studentData);
    console.log("Додано студента:", studentData);
  };
  updateLocalStorage();
  renderStudentsList(dataArray);
  toggleModal(modalFormElement); //!
};


//! 4. Підтвердження видалення
function handleConfirmDelete() {
  // dataArray = dataArray.filter(item => item.id !== editStudentId); //todo: var.1
  dataArray.splice(editStudentId, 1); //todo: var.2
  //! логіка створення id карток таким чином, щоб вони завжди дорівнювали ідентифікатору елементу масиву
  for (let i = 0; i < dataArray.length; i++) {
    dataArray[i].id = i;
  };
  console.log("dataArray:", dataArray);
  updateLocalStorage();
  renderStudentsList(dataArray);
  toggleModal(modalConfirmElement); //!
};


// ============================================================================
//todo 🧠 ОСНОВНІ ФУНКЦІЇ
// ============================================================================
//! --- Оновлення dataArray з localStorage ---
function updateData() {
  dataArray = JSON.parse(localStorage.getItem("studentsList"));
};

//! --- Оновлення JSON та localStorage ---
function updateLocalStorage() {
  localStorage.setItem("studentsList", JSON.stringify(dataArray, null, 2)); //!
}

//! --- Рендер списку студентів ---
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

//! Ⓜ️1️⃣ Функція ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ або РЕДАГУВАННЯ(+ВИДАЛЕННЯ)
function toggleModal(modalElement) {
  console.log("ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/ВИДАЛЕННЯ");
  modalElement.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
};
