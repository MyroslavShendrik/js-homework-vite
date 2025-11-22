import Handlebars from "handlebars";
import templateRaw from "../handlebars/lesson27.hbs?raw";
import { forEach, forIn } from "lodash";

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
let editStudentId;

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
const formTitle = document.getElementById("form-title");

// ============================================================================
// 🚀 РЕНДЕР СПИСКУ СТУДЕНТІВ ПРИ ЗАПУСКУ
// ============================================================================
// normalizeIds();
renderStudentsList(dataArray);

// ============================================================================
// 🎧 СЛУХАЧІ ПОДІЙ
// ============================================================================
btnAddStudent.addEventListener("click", addStudent);
studentFormElement.addEventListener("submit", handleSubmitForm);
studentsListElement.addEventListener("click", handleStudentCardClick);
confirmYesButtonElement.addEventListener("click", handleConfirmDelete);
document.body.addEventListener("click",  toggleModal);

// ============================================================================
// ⚙️ ФУНКЦІЇ-СЛУХАЧІ
// ============================================================================

// 1. Натискання “Додати студента”
function addStudent() {
  updateData();
  console.log("Перед додаванням студента, dataArray:", dataArray);
  formTitle.textContent = "Нова картка студента";
  studentFormElement.reset(); //! додати цю логіку в кінці роботи форми 
  //! editStudentId = null;
  console.log("Відкрито форму для нового студента");
  toggleModal(modalFormElement);
}

// 2. Клік по картці студента (редагування / видалення)
function handleStudentCardClick(event) {
  if (event.target.classList.contains("edit-btn") || event.target.classList.contains("delete-btn")) {
    console.log("Клік по картці студента (редагування / видалення)");
    editStudentId = Number(event.target.closest(".student-card").dataset.id);
    console.log("editStudentId:", editStudentId);
  } else return;


  updateData();
  console.log("Перед редагуванням/видаленням, dataArray:", dataArray);

  const currentStudent = dataArray.find(s => s.id === editStudentId);
  console.log("currentStudent:", currentStudent);

  if (event.target.classList.contains("edit-btn")) {
    formTitle.textContent = "Редагування студента";
    toggleModal(modalFormElement);
    studentFormElement.firstName.value = currentStudent.firstName;
    studentFormElement.lastName.value = currentStudent.lastName;
    studentFormElement.age.value = currentStudent.age;
    studentFormElement.course.value = currentStudent.course;
    studentFormElement.faculty.value = currentStudent.faculty;
  }

  if (event.target.classList.contains("delete-btn")) {
    console.log("Видалити картку студента");
    confirmTextElement.textContent = `Видалити картку студента ${currentStudent.firstName}?`;
    toggleModal(modalConfirmElement);
  }
}

// 3. Відправлення форми “Зберегти”
function handleSubmitForm(event) {
  event.preventDefault();
  console.log("Перед збереженням, dataArray:", dataArray);

  const formData = new FormData(studentFormElement);
  const studentData = Object.fromEntries(formData.entries());
  studentData.age = Number(studentData.age);
  studentData.course = Number(studentData.course);

  if (formTitle.textContent === "Редагування студента") {
    //! редагуємо існуючого студента
      dataArray[editStudentId] = { ...dataArray[editStudentId], ...studentData };
      console.log("Відредаговано студента:", dataArray[editStudentId]);

    //! логіка додавання
  } else {
    //! додаємо нового студента
    studentData.id = dataArray.length;
    console.log("editStudentId-ДОДАВАННЯ:", editStudentId);
    console.log("dataArray.length:", dataArray.length);
    dataArray.push(studentData);
    console.log('dataArray:',dataArray);
    console.log("Додано студента:", studentData);
  }

  // normalizeIds(); 
  updateLocalStorage();
  renderStudentsList(dataArray);
  toggleModal(modalFormElement);
}



// 4. Підтвердження видалення
function handleConfirmDelete() {
  // dataArray = dataArray.filter(item => item.id !== editStudentId); //! var1 

  dataArray.splice(editStudentId,1); //! var 2
  console.log("dataArray:",dataArray);

  //  dataArray = dataArray.map((student, index) => {
  //   return {
  //   ...student,
  //   id: index
  //   };
  // });
  // normalizeIds();
 for (let index = 0; index < dataArray.length; index++) {
  dataArray[index].id = index; 
 }     
  console.log("editStudentId видалення:", editStudentId);
  updateLocalStorage();
  renderStudentsList(dataArray);
  toggleModal(modalConfirmElement);
}

// 5. Закриття модальних вікон
// function handleCloseModal(event) {
//   if (event.target.dataset.close !== undefined) {
//     const modalWindowElement = event.target.closest(".modal");
//     toggleModal(modalWindowElement);
//   }
// }

// ============================================================================
// 🧠 ОСНОВНІ ФУНКЦІЇ
// ============================================================================

function updateLocalStorage() {
  localStorage.setItem("studentsList", JSON.stringify(dataArray, null, 2));
}

function updateData() {
  dataArray = JSON.parse(localStorage.getItem("studentsList"));
  console.log("dataArray:", dataArray);
}

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

function toggleModal(modalElement) {
  if (modalElement instanceof Event) {
    modalElement = modalElement.target.closest(".modal");
  }
  if (!modalElement) return; 

  modalElement.classList.toggle("hidden");
}

// --- Перерахунок ID, щоб починалося з 0 ---
// function normalizeIds() {
//   dataArray = dataArray.map((student, index) => {
//     console.log("student:",student);
//     return {
//     ...student,
//     id: index
//     };
//   });
// }

