
//* ✴️ Ціль: Створити Веб-додаток на базі бандлера Vite,
//* який повинен дозволяти користувачам додавати, переглядати,
//* видаляти та оновлювати дані про студентів,
//* використовуючи формат даних JSON.

//? 1.Кожен запис про студента повинен містити наступну інформацію:
//?  🔸 ім'я,
//?  🔸 прізвище,
//?  🔸 вік,
//?  🔸 курс,
//?  🔸 факультет.

//? 2.Кожна нова картка студента додається до масиву даних dataArray,
//? як окремий об’єкт, в кінець цього масиву об’єктів за допомогою форми,
//? яка з’являється при натисканні на кнопку «Додати студента»
//? та знаходиться перед Списком студентів.

//? 3.На наступному кроці, масив об’єктів dataArray треба конвертувати
//? у JSON - формат та записати у змінну dataJSON.

//? 4.На  цьому етапі передбачається передача файлу dataJSON з Frontend
//? на Backend, а потім у зворотному напрямку.Цей крок буде ретельно
//? розглянутий у наступних семестрах в рамках курсу «Backend».

//? 5.Після створенні кожної нової картки студента  потрібно оновити
//? масив об’єктів dataArray, а також знову оновити весь список студентів
//? у змінній dataJSON, та «перемалювати» його відносно елементу
//? <ul id="students-list"></ul>. Для побудови списку студентів
//? дані треба брати тільки з JSON-файлу dataJSON.

//? 6.Кожен запис про студента – це окрема картка в списку всіх студентів,
//? яка має всі властивості, зазначені у пункті 1, та відповідні значення,
//? а також має дві додаткові кнопки «Edit» та «Delete» для редагування
//? та видалення цієї картки за допомогою додаткових форм, які з’являться
//? при натисканні на них. При натисканні на кнопку «Delete» потрібно
//? вивести підтвердження у вигляді форми с запитанням «Видалити картку?»
//? та кнопками «Так» і «Ні». При видаленні запису, дані повинні бути
//? видалені з масиву об’єктів dataArray та з JSON-файлу dataJSON.
//? При оновленні запису («Edit»), дані повинні бути також змінені в масиві
//? об’єктів dataArray та у JSON-файлу dataJSON.

//? 7.Для створення картки студента необхідно використовувати бібліотеку Handlebars
//? з окремим шаблоном template-student-data.hbs.

//? 8.Для перетворення даних у формат JSON та зворотного перетворення з формату JSON
//? у звичайний об'єкт, використовуються методи JSON.stringify() та JSON.parse() відповідно.

//? 9.При додаванні, оновленні та видаленні записів, користувач повинен бути попереджений
//? у разі введення некоректних даних, які не відповідають формату JSON за допомогою
//? конструкції try...catch.

 
//? ✳️ Додаткові уточнення: необов'язково
//? • Для зберігання та відображення даних використовувати окремий файл students.json.
//? • Для відображення списку студентів використовувати таблицю.
//? • Додати можливість редагувати записи про студентів, використовуючи модальне вікно з формою для редагування.
//? • Додати функціонал пошуку студентів за прізвищем або курсом. 
import Handlebars from "handlebars";
import studentTemplate from "../handlebars/lesson26.hbs?raw";

let dataArray = [];
let dataJSON = "";


const btnAddStudent = document.getElementById("btn-add-student");
const btnCancel = document.getElementById("btn-cancel");
const formArea = document.getElementById("form-area");
const studentForm = document.getElementById("student-form");
const studentsList = document.getElementById("students-list");

let editId = null;


btnAddStudent.addEventListener("click", () => {
  formArea.classList.remove("hidden");
  studentForm.reset();
  editId = null;
  document.getElementById("form-title").textContent = "Нова картка студента";
});


btnCancel.addEventListener("click", () => {
  formArea.classList.add("hidden");
  studentForm.reset();
});


studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(studentForm);
  const student = Object.fromEntries(formData.entries());

  student.age = Number(student.age);
  student.course = Number(student.course);

  try {
    if (editId) {
      const idx = dataArray.findIndex((s) => s.id === editId);
      dataArray[idx] = { ...dataArray[idx], ...student };
      editId = null;
    } else {
      student.id = Date.now();
      dataArray.push(student);
    }

    dataJSON = JSON.stringify(dataArray, null, 2);
    renderStudents();

    formArea.classList.add("hidden");
    studentForm.reset();
  } catch (err) {
    alert("Помилка JSON: " + err.message);
  }
});

function renderStudents() {
  studentsList.innerHTML = "";
  try {
    const parsed = JSON.parse(dataJSON);
    const template = Handlebars.compile(studentTemplate);

    parsed.forEach((student) => {
      studentsList.insertAdjacentHTML("beforeend", template(student));
    });
  } catch (err) {
    console.error("JSON parse error:", err);
  }
}


studentsList.addEventListener("click", (e) => {
  const li = e.target.closest(".student-card");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Видалити картку?")) {
      dataArray = dataArray.filter((s) => s.id !== id);
      dataJSON = JSON.stringify(dataArray, null, 2);
      renderStudents();
    }
  }

  if (e.target.classList.contains("edit-btn")) {
    const student = dataArray.find((s) => s.id === id);
    if (student) {
      formArea.classList.remove("hidden");
      document.getElementById("form-title").textContent = "Редагування студента";
      studentForm.firstName.value = student.firstName;
      studentForm.lastName.value = student.lastName;
      studentForm.age.value = student.age;
      studentForm.course.value = student.course;
      studentForm.faculty.value = student.faculty;
      editId = id;
    }
  }
});
