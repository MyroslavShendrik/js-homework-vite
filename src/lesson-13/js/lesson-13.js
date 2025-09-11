//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
//! Код виконаного завдання

const { name, age, hobby, premium } = userA;

console.log(name);     
console.log(age);     
console.log(hobby);  
console.log(premium);
console.log("-------------------------------------------------------------");



//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name: 'Mango', age: 2 };
//! Код виконаного завдання
const { name: nameB, age: ageB } = userB;

console.log(nameB); 
console.log(ageB); 
console.log("-------------------------------------------------------------");



//todo [3]
console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
  count: 11,
  employeePerformanceLists: [
      {
          ann: 29,
          david: 35,
          helen: 1,
          lorence: 99,
      },
      {
          poly: 12,
          mango: 17,
          ajax: 4,
      },
      {
          lux: 147,
          david: 21,
          kiwi: 19,
          chelsy: 38,
      }
  ],
};
//! Код виконаного завдання
const {
  count,
  employeePerformanceLists: [
    { ann, david: david1, helen, lorence },
    { poly, mango, ajax },
    { lux, david: david2, kiwi, chelsy }
  ]
} = employeePerformance;

console.log(count);
console.log(ann, david1, helen, lorence);
console.log(poly, mango, ajax);
console.log(lux, david2, kiwi, chelsy);
console.log("-------------------------------------------------------------");



//todo [4]
console.log(
  "%c [4] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
  count: 6,
  employeeSalaryLists: [
      {
          mango: 100,
          poly: 150,
          alfred: 80,
      },
      {
          kiwi: 200,
          lux: 50,
          chelsy: 150,
      }
  ],
};
//! Код виконаного завдання
const {
  count: count1,
  employeeSalaryLists: [
    { mango: mango1, poly: poly1, alfred },
    { kiwi: kiwi1, lux: lux1, chelsy: chelsy1 }
  ]
} = employeeSalaries;

console.log(count1);
console.log(mango1);
console.log(poly1);
console.log(alfred);
console.log(kiwi1);
console.log(lux1);
console.log(chelsy1);


console.log("-------------------------------------------------------------");



//todo [5]
console.log(
  "%c [5] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
  {
      name: 'Радар',
      price: 1300,
      quantity: 4
  },
  {
      name: 'Сканер',
      price: 2700,
      quantity: 3
  },
  {
      name: 'Дроїд',
      price: 400,
      quantity: 7
  },
  {
      name: 'Захоплення',
      price: 1200,
      quantity: 2
  },
];
//! Код виконаного завдання
const [ 
  { name: name1, price: price1, quantity: quantity1 },
  { name: name2, price: price2, quantity: quantity2 },
  { name: name3, price: price3, quantity: quantity3 },
  { name: name4, price: price4, quantity: quantity4 },
] = products;

console.log(name1, price1, quantity1);
console.log(name2, price2, quantity2);
console.log(name3, price3, quantity3);
console.log(name4, price4, quantity4);
console.log("-------------------------------------------------------------");



//todo [6]
console.log(
  "%c [6] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account = {
  //todo: Поточний баланс рахунку
  balance: 0,
  //todo:  Історія транзакцій
  transactions: [],


  //todo:  Метод створює і повертає об'єкт транзакції.
  //todo:  Приймає суму і тип транзакції.
  createTransaction(amount, type) { 
 const objectTransaction = {
//  amount: amount,
//  type: type,
amount,
type,
 id: this.transactions.length + 1, 
 }
//  console.log("objectTransaction", objectTransaction);
 return objectTransaction; 
  },

  //todo:  Метод відповідає за додавання суми до балансу.
  //todo:  Приймає суму танзакції.
  //todo:  Викликає createTransaction для створення об'єкта транзакції
  //todo:  після чого додає його в історію транзакцій
  deposit(amount) { 
  this.balance += amount;
  const {DEPOSIT} = Transaction
  const newTransaction = this.createTransaction(amount, DEPOSIT);
  this.transactions.push(newTransaction);
  this.getBalance()
  console.log("transactions", this.transactions);

  },
  

    //todo:  Метод відповідає за зняття суми з балансу.
    //todo:  Приймає суму танзакції.
    //todo:  Викликає createTransaction для створення об'єкта транзакції
    //todo:  після чого додає його в історію транзакцій.
    //todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
    //todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
    withdraw(amount) { 
      if (amount > this.balance) {
        console.log('Недостатньо коштів для зняття.');
        return;
      }
      this.balance -= amount;
      const { WITHDRAW } = Transaction;
      const newTransaction = this.createTransaction(amount, WITHDRAW);
      this.getBalance()
      this.transactions.push(newTransaction);
    },

    //todo:  Метод повертає поточний баланс
    getBalance() {
      console.log("Ваш баланс",this.balance);
      return this.balance;
     },

    //todo:  Метод шукає і повертає об'єкт транзакції по id
    getTransactionDetails(id) {
      for (let i = 0; i < this.transactions.length; i++) {
        const transaction = this.transactions[i];
        if (transaction.id === id) {
          return transaction;
        }
      }
      console.log("такої транкзакції немає!")
      return null;
     },

    //todo:  Метод повертає кількість коштів
    //todo:  певного типу транзакції з усієї історії транзакцій
    getTransactionTotal_var1(type) {
      let total = 0;
      for (let i = 0; i < this.transactions.length; i++) {
        const transaction = this.transactions[i];
        if (transaction.type === type) {
          total += transaction.amount;
        }
      }
      return total;
     },
getTransactionTotal(type){
return this.transactions
.filter(transaction => transaction.type === type)
.reduce((total, transaction) => total + transaction.amount, 0);
},
getTransactionTotal_var2(type){
return this.transactions
.filter(transaction => transaction.type === type)
.map(transaction => transaction.amount)
.reduce((total,amount) => total + amount, 0);
},
};
//! Код виконаного завдання
// console.log(account.createTransaction(1000, Transaction.DEPOSIT));
// console.log(account.createTransaction(200, Transaction.WITHDRAW))
account.deposit(1000)
account.withdraw(300)
account.deposit(200)
account.deposit(300)
account.withdraw(400)
account.withdraw(300)
console.log("транзакція №3 :",account.getTransactionDetails(3))
console.log("транзакція №8 :",account.getTransactionDetails(8))
console.log("сума транкзакцій додавання var1", account.getTransactionTotal_var1(Transaction.DEPOSIT))
console.log("сума транкзакцій віднімання var1", account.getTransactionTotal_var1(Transaction.WITHDRAW))
console.log("сума транкзакцій додавання", account.getTransactionTotal(Transaction.DEPOSIT))
console.log("сума транкзакцій віднімання", account.getTransactionTotal(Transaction.WITHDRAW))
console.log("сума транкзакцій додавання var2", account.getTransactionTotal_var2(Transaction.DEPOSIT))
console.log("сума транкзакцій віднімання var2", account.getTransactionTotal_var2(Transaction.WITHDRAW))

console.log("-------------------------------------------------------------");


