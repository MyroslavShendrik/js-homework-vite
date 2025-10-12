import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson26.hbs?raw";

// компілюю шаблон, щоб потім підставляти туди дані студентів
const studentTemplate = Handlebars.compile(templateRaw);


let dataArray = []; 
let dataJSON = ""; 
let editId = null; 
let nextId = 1; 

// ловлю всі потрібні елементи з html
const list = document.getElementById("students-list");
const modalForm = document.getElementById("modal-form");
const modalConfirm = document.getElementById("modal-confirm");
const studentForm = document.getElementById("student-form");
const confirmText = document.getElementById("confirm-text");
const btnYes = document.getElementById("btn-confirm-yes");

let deleteId = null; // тимчасово сюди кидаю id студента, якого хочу видалити

// коли натискаю кнопку “додати студента”
document.getElementById("btn-add-student").addEventListener("click", () => {
  openForm("Нова картка студента");
  studentForm.reset(); // очищаю форму
  editId = null; // кажу що це новий студент, а не редагування
  console.log(" Відкрито форму для нового студента");
});

// коли натискаю “зберегти” в формі
studentForm.addEventListener("submit", (e) => {
  e.preventDefault(); // щоб не перезавантажувалася сторінка
  const formData = new FormData(studentForm);
  const student = Object.fromEntries(formData.entries()); // роблю з форми обʼєкт

  // перевожу текстові значення в числа
  student.age = Number(student.age);
  student.course = Number(student.course);

  // якщо редагую існуючого студента
  if (editId !== null) {
    const idx = dataArray.findIndex((item) => item.id === editId);
    dataArray[idx] = { ...dataArray[idx], ...student }; // оновлюю дані
    console.log(" Відредаговано студента:", dataArray[idx]);
    editId = null;
  } else {
    // якщо додаю нового
    student.id = nextId++;
    dataArray.push(student);
    console.log(" Додано студента:", student);
  }

  updateJSON();
  render(); // перемальовую список
  closeModal(modalForm); // закриваю форму
});

// ловлю кліки по картках студентів
list.addEventListener("click", (e) => {
  const card = e.target.closest(".student-card");
  if (!card) return;

  // витягую id студента з елемента
  const id = Number(card.dataset.id);
  const student = dataArray.find((s) => s.id === id);

  // якщо натиснув кнопку “редагувати”
  if (e.target.classList.contains("edit-btn")) {
    openForm("Редагування студента");
    // заповнюю форму поточними даними
    studentForm.firstName.value = student.firstName;
    studentForm.lastName.value = student.lastName;
    studentForm.age.value = student.age;
    studentForm.course.value = student.course;
    studentForm.faculty.value = student.faculty;
    editId = id;
  }

  // якщо натиснув кнопку “видалити”
  if (e.target.classList.contains("delete-btn")) {
    deleteId = id;
    confirmText.textContent = `Видалити картку студента ${student.firstName}?`;
    openModal(modalConfirm);
  }
});

// коли підтверджую видалення
btnYes.addEventListener("click", () => {
  dataArray = dataArray.filter((s) => s.id !== deleteId);
  deleteId = null; // очищаю, щоб не залишився старий id
  updateJSON();
  render();
  closeModal(modalConfirm);
});

// якщо натиснув на елемент із атрибутом data-close — закриваю модалку
document.body.addEventListener("click", (e) => {
  if (e.target.dataset.close !== undefined) {
    closeModal(e.target.closest(".modal"));
  }
});

// функція щоб намалювати список студентів
function render() {
  list.innerHTML = "";
  const arr = JSON.parse(dataJSON);
  arr.forEach((s) => {
    list.insertAdjacentHTML("beforeend", studentTemplate(s));
  });
}

// перетворюю масив у JSON
function updateJSON() {
  dataJSON = JSON.stringify(dataArray, null, 2); // null, 2 — це просто гарне форматування
}

// відкриття та закриття модалок
function openForm(title) {
  document.getElementById("form-title").textContent = title;
  openModal(modalForm);
}

function openModal(modal) {
  modal.classList.remove("hidden");
}

function closeModal(modal) {
  modal.classList.add("hidden");
}
