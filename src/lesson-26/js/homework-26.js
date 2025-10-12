import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson26.hbs?raw";

// компілюю шаблон, щоб потім підставляти туди дані студентів
const studentTemplate = Handlebars.compile(templateRaw);

// головний масив студентів і службові змінні
let dataArray = []; 
let dataJSON = ""; 
let editStudentId = null; 
let nextStudentId = 1; 
let deleteStudentId = null; // тимчасово зберігаю id студента, якого хочу видалити

// ловлю всі потрібні елементи з HTML
const studentsListElement = document.getElementById("students-list");
const modalFormElement = document.getElementById("modal-form");
const modalConfirmElement = document.getElementById("modal-confirm");
const studentFormElement = document.getElementById("student-form");
const confirmTextElement = document.getElementById("confirm-text");
const confirmYesButtonElement = document.getElementById("btn-confirm-yes");

// коли натискаю кнопку “додати студента”
document.getElementById("btn-add-student").addEventListener("click", () => {
  openForm("Нова картка студента");
  studentFormElement.reset(); // очищаю форму
  editStudentId = null; // кажу, що це новий студент, а не редагування
  console.log(" Відкрито форму для нового студента");
});

// коли натискаю “зберегти” в формі
studentFormElement.addEventListener("submit", (event) => {
  event.preventDefault(); // щоб не перезавантажувалася сторінка

  const formData = new FormData(studentFormElement);
  const studentData = Object.fromEntries(formData.entries()); // роблю з форми обʼєкт

  // перевожу текстові значення в числа (для віку і курсу)
  studentData.age = Number(studentData.age);
  studentData.course = Number(studentData.course);

  // якщо редагую існуючого студента
  if (editStudentId !== null) {
    const studentIndex = dataArray.findIndex((studentItem) => studentItem.id === editStudentId);
    dataArray[studentIndex] = { ...dataArray[studentIndex], ...studentData }; // оновлюю дані
    console.log(" Відредаговано студента:", dataArray[studentIndex]);
    editStudentId = null;
  } else {
    // якщо додаю нового студента
    studentData.id = nextStudentId++;
    dataArray.push(studentData);
    console.log(" Додано студента:", studentData);
  }

  updateJSON();
  renderStudentsList();
  closeModal(modalFormElement);
});

// ловлю кліки по картках студентів
studentsListElement.addEventListener("click", (event) => {
  const cardElement = event.target.closest(".student-card");
  if (!cardElement) return;

  // витягую id студента з data-id
  const currentStudentId = Number(cardElement.dataset.id);
  const currentStudent = dataArray.find((studentItem) => studentItem.id === currentStudentId);

  // якщо натиснув кнопку “редагувати”
  if (event.target.classList.contains("edit-btn")) {
    openForm("Редагування студента");
    // заповнюю форму поточними даними
    studentFormElement.firstName.value = currentStudent.firstName;
    studentFormElement.lastName.value = currentStudent.lastName;
    studentFormElement.age.value = currentStudent.age;
    studentFormElement.course.value = currentStudent.course;
    studentFormElement.faculty.value = currentStudent.faculty;
    editStudentId = currentStudentId;
  }

  // якщо натиснув кнопку “видалити”
  if (event.target.classList.contains("delete-btn")) {
    deleteStudentId = currentStudentId;
    confirmTextElement.textContent = `Видалити картку студента ${currentStudent.firstName}?`;
    openModal(modalConfirmElement);
  }
});

// коли підтверджую видалення
confirmYesButtonElement.addEventListener("click", () => {
  dataArray = dataArray.filter((studentItem) => studentItem.id !== deleteStudentId);
  deleteStudentId = null; // очищаю, щоб не залишився старий id
  updateJSON();
  renderStudentsList();
  closeModal(modalConfirmElement);
});

// якщо натиснув на елемент із атрибутом data-close — закриваю модалку
document.body.addEventListener("click", (event) => {
  if (event.target.dataset.close !== undefined) {
    const modalWindowElement = event.target.closest(".modal");
    closeModal(modalWindowElement);
  }
});

// функція щоб намалювати список студентів
function renderStudentsList() {
  studentsListElement.innerHTML = "";
  const studentsArray = JSON.parse(dataJSON);

  studentsArray.forEach((studentItem) => {
    studentsListElement.insertAdjacentHTML("beforeend", studentTemplate(studentItem));
  });
}

// перетворюю масив у JSON
function updateJSON() {
  // null, 2 — це просто форматування JSON з відступами для зручності
  dataJSON = JSON.stringify(dataArray, null, 2);
}

// відкриття форми (передаю заголовок)
function openForm(formTitle) {
  const formTitleElement = document.getElementById("form-title");
  formTitleElement.textContent = formTitle;
  openModal(modalFormElement);
}

// відкриваю будь-яке модальне вікно
function openModal(modalElement) {
  modalElement.classList.remove("hidden");
}

// закриваю будь-яке модальне вікно
function closeModal(modalElement) {
  modalElement.classList.add("hidden");
}
