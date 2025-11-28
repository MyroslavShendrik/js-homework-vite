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
let editStudentId;

// ============================================================================
// 🧩 HTML-ЕЛЕМЕНТИ
// ============================================================================
const modalFormElement = document.getElementById("modal-form");
const modalConfirmElement = document.getElementById("modal-confirm");
const studentsListElement = document.getElementById("students-list");
const studentFormElement = document.getElementById("student-form");
const confirmTextElement = document.getElementById("confirm-text");
const confirmYesButtonElement = document.getElementById("btn-confirm-yes");
const btnAddStudent = document.getElementById("btn-add-student");
const formTitle = document.getElementById("form-title");
const btnClose = document.getElementById("btn-close");
const btnCloseConfirm = document.getElementById("btn-close-confirm");
console.log("btnClose:",btnClose);
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
// document.body.addEventListener("click",  toggleModal); //! ChatGPT var 2 
// document.body.addEventListener("click",  handleCloseModal); //! ChatGPT var 1
btnClose.addEventListener("click",() => toggleModal(modalFormElement));
btnCloseConfirm.addEventListener("click",() => toggleModal(modalConfirmElement));


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
// addStudent()
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

//! Заповнення форми var.1.0
let studentData = {
  firstName: studentFormElement.firstName.value,
  lastName: studentFormElement.lastName.value,
  age: Number(studentFormElement.age.value),
  course: Number(studentFormElement.course.value),
  faculty: studentFormElement.faculty.value
};
//! Заповнення форми var.1.1
  // let studentData = {};
  // studentData.firstName = studentFormElement.firstName.value;
  // studentData.lastName = studentFormElement.lastName.value;
  // studentData.age = Number(studentFormElement.age.value);
  // studentData.course = Number(studentFormElement.course.value);
  // studentData.faculty = studentFormElement.faculty.value;
  // console.log("studentData:", studentData);

//! Заповнення форми var.2
  // const formData = new FormData(studentFormElement);
  // const studentData = Object.fromEntries(formData.entries());
  // studentData.age = Number(studentData.age);
  // studentData.course = Number(studentData.course);

console.log("studentData:", studentData);

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


 for (let index = 0; index < dataArray.length; index++) {
  dataArray[index].id = index; 
 }     
  console.log("editStudentId видалення:", editStudentId);
  updateLocalStorage();
  renderStudentsList(dataArray);
  toggleModal(modalConfirmElement);
}



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
  modalElement.classList.toggle("hidden");
}

// --- Перерахунок ID, щоб починалося з 0 ---


