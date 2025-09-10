const monIncome =parseInt(prompt("Enter your monthly income"))
let dailyExpense = parseInt(prompt("Enter your daily expense"))
let monthlyExpense = dailyExpense * 30;
let spendings = parseInt(prompt("Enter your spendings"))
let savings =parseInt(prompt("Enter your savings"));
let balance = monIncome - (monthlyExpense + spendings + savings);
console.log("Your balance is" + balance);