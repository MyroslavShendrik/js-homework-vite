//! Масиви. Створення масиву
console.warn("Створення масиву:");
//? Масив - структура даних для зберігання
//? і маніпулювання колекцією індексованих значень.
//? Використовується для зберігання впорядкованих
//? колекцій даних, наприклад, списку курортів,
//? товарів, клієнтів в готелі тощо.

//? Створення масива
//? Масив оголошується і береться
//? у квадратні дужки[] - літералом масиву.
//? Всередині дужок кожен елемент масиву розділяється комою.
const arrayEmpty = [];
console.log("arrayEmpty:", arrayEmpty); //! []
console.log("-----------------------------------------");
const clients = ["Mango", "Poly", "Ajax"];
console.log("clients:", clients); //! ['Mango', 'Poly', 'Ajax']
console.log("typeof clients:", typeof clients); //! object
console.log("typeof null:", typeof null); //! object
console.log("-----------------------------------------");

//! Доступ до елементів
console.warn("Доступ до елементів: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_07/images/indexing-array-elements.jpg");
//? Для доступу до значення елемента масиву 
//? використовується синтаксис квадратних дужок масив[індекс]. 
//? Між іменем змінної, що зберігає масив, 
//? і квадратними дужками не повинно бути пробілу.
const newClients = ["Mango", "Poly", "Ajax"];
console.log("newClients:", newClients); //! ['Mango', 'Poly', 'Ajax']

//? Зазначаючи в дужках індекс елемента, ми отримуємо його значення
console.log("newClients[0]:", newClients[0]); //! Mango
console.log("newClients[1]:", newClients[1]); //! Poly
console.log("newClients[2]:", newClients[2]); //! Ajax
console.log("---------------------------------------------------------");

const newNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log("newNumbers:", newNumbers); //! [1, 2, 3, 4, 5, 6, 7]

const newBooleans = [true, false, true, false];
console.log("newBooleans:", newBooleans); //! [true, false, true, false]

const differentDataTypes = ["Mango", 7, false, undefined, null];
console.log("differentDataTypes:", differentDataTypes); //! ['Mango', 7, false, undefined, null]

const string = "Mango";
console.log('string:', string);
const stringEl1 = string[0];
console.log('stringEl1:', stringEl1);
// string[0] = "N"; //! ERROR
const stringLength = string.length;
console.log('stringLength:', stringLength);
// string.length = 3; //! ERROR

const newClientsEl1 = newClients[0] ;
newClients[0] = "Kiwi";
console.log("newClients:", newClients);
const newClientsLength = newClients.length;
console.log('newClientsLength:', newClientsLength);
newClients.length = 5; 
console.log("newClients:", newClients);
console.log("newClients[4]:", newClients[4]);
newClients.length = 2; 
console.log("newClients:", newClients);


//! Індекс останнього елемента
console.warn("Індекс останнього елемента:");
//? Для того, щоб отримати значення останнього елемента,
//? застосовується наступний підхід - довжина масиву
//? завжди на одиницю більша, ніж індекс останнього елемента.
//? Використовуючи формулу довжина_масиву - 1, можна отримати
//? значення останнього елемента масиву довільної довжини.
const allMyClients = ["Mango", "Poly", "Ajax"];
console.log("allMyClients:", allMyClients); //! ['Mango', 'Poly', 'Ajax']

const lastElementIndex = allMyClients.length - 1;
console.log("Останній індекс:", lastElementIndex); //! 2
console.log("Останній єлемент:", allMyClients[lastElementIndex]); //! "Ajax"
console.log("Останній єлемент:", allMyClients[allMyClients.length - 1]); //! "Ajax"
console.log("---------------------------------------------------------");
