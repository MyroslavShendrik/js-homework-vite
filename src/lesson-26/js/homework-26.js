import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson26.hbs?raw";

const studentTemplate = Handlebars.compile(templateRaw);

// Масив даних
let dataArray = [];
let dataJSON = "";
let editId = null;
let isEdit = true;
let nextId = 1; // Лічильник ID

// DOM елементи
const list = document.getElementById("students-list");
const modalForm = document.getElementById("modal-form");
const modalConfirm = document.getElementById("modal-confirm");
const studentForm = document.getElementById("student-form");
const confirmText = document.getElementById("confirm-text");
const btnYes = document.getElementById("btn-confirm-yes");

let deleteId = null;
console.log("typeof deleteId:",typeof deleteId);
// Відкрити модалку форми
document.getElementById("btn-add-student").addEventListener("click", () => {
  openForm("Нова картка студента");
  studentForm.reset();
  editId = null;
  console.log(" Відкрито форму для нового студента");
});

// Сабміт форми
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(studentForm);
  const student = Object.fromEntries(formData.entries());
  // console.log("student:", student);
  // console.log("typeof student.age:",typeof student.age);
  student.age = Number(student.age);
  student.course = Number(student.course);

  if (editId) {
    console.log("editID:",editId);
    const idx = dataArray.findIndex((item) => item.id === editId);
    dataArray[idx] = { ...dataArray[idx], ...student };
    console.log(" Відредаговано студента:", dataArray[idx]);
    editId = null;
  } else {
    student.id = nextId++;
    dataArray.push(student);
    console.log(" Додано студента:", student);
  }

  updateJSON();
  render();
  closeModal(modalForm);
  // console.log("typeof student.age:",typeof student.age);
});

// Делегування подій для списку
list.addEventListener("click", (e) => {
  const card = e.target.closest(".student-card");
  if (!card) return;

  const id = Number(card.id.replace("student-", ""));
  const student = dataArray.find((s) => s.id === id);

  if (e.target.classList.contains("edit-btn")) {
    console.log(" Клік по редагуванню:", student);
    openForm("Редагування студента");
    studentForm.firstName.value = student.firstName;
    studentForm.lastName.value = student.lastName;
    studentForm.age.value = student.age;
    studentForm.course.value = student.course;
    studentForm.faculty.value = student.faculty;
    editId = id;
  }

  if (e.target.classList.contains("delete-btn")) {
    deleteId = id;
    confirmText.textContent = `Видалити картку студента ${card.querySelector("strong").textContent}?`;
    openModal(modalConfirm);
    console.log(" Клік по видаленню студента:", student);
  }
});

// Підтвердження видалення
btnYes.addEventListener("click", () => {
  console.log(" Підтверджено видалення студента з id:", deleteId);
  dataArray = dataArray.filter((s) => s.id !== deleteId);
  updateJSON();
  render();
  closeModal(modalConfirm);
});

// Закриття модалок
document.body.addEventListener("click", (e) => {
  if (e.target.dataset.close !== undefined) {
    closeModal(e.target.closest(".modal"));
    console.log(" Закрито модалку");
  }
});

// --- ФУНКЦІЇ ---
function render() {
  list.innerHTML = "";
  JSON.parse(dataJSON).forEach((s) => {
    list.insertAdjacentHTML("beforeend", studentTemplate(s));
  });
  console.log(" Поточний список студентів:", JSON.parse(dataJSON));
}

function updateJSON() {
  dataJSON = JSON.stringify(dataArray, null, 2); //! розібратися що таке null 2 ;
}

function openForm(title) {
  document.getElementById("form-title").textContent = title;
  openModal(modalForm);
  console.log(" Відкрито форму:", title);
}

function openModal(modal) {
  modal.classList.remove("hidden");
  console.log(" Модалка відкрита:", modal.id);
}

function closeModal(modal) {
  modal.classList.add("hidden");
  console.log(" Модалка закрита:", modal.id);
}
