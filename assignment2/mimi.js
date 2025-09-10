//...number 1
const user1 = {
    name: "Tayo",
    balance: 70000,
    currency: "NGN",
    type: "savings",
 
};
const user2 = {
    name: "Sid",
    balance: 60000,
    currency: "USD",
    type:"",
 
};
const user3 = {
    name: "Karimi",
    balance: 40000,
    currency: "NGN", 
    type:"savings",
};

const user4 = {
    name: "Wendy",
    balance: 30000,
    currency: "USD",
    type:"checking", 
};
//...number2
let user1Deposit=2000;
let addDeposit=user1.balance+user1Deposit;
user1.balance=addDeposit;
console.log(
   `${user1.name} current balance is ${user1.balance}${user1.curreny}` 
);
let user3Deposit=100000;
let addDeposit3=user3.balance+user3Deposit;
user3.balance=addDeposit3;
console.log(
    `${user3.name} current balance is ${user3.balance} ${user3.currency}`
);
//...number 3
let user2withdrawal=500;
if(user2withdrawal<=user2.balance) {
    let withdrawal=user2.balance-user2withdrawal;
    user2.balance=withdrawal;
    console.log(
        `successful withdrawal ${user2.name},your account balance is ${user2.balance}`
    );
}else{
    console.log(`withdrawal denied for ${user2.name}:insufficient funds`);
}
let user4withdrawal =10500;
if(user4withdrwal<=user4.balance) {
    let withdrawal=user4.balance - user4withdrawal;
    user4.log(
        `successful withdrawal ${user4.name},your account balance is ${ user4.balance}`
    );
}else{
    console.log(`withdrawal denied for ${user4.name}:insufficient funds`);
}
//...number4
let transferAmount =60000;
if(user1.currency === user3.currency){
    let user3balance = user3.balance - transferAmount;
    let user1balance = user1.balance + transferAmount;
    user1.balance =user1balance;
    user3.balance =user3balance;
    console.log(
        `transfer successful, ${user3.name} has ${user3.balance} left, and ${user1.name} has ${user1.balance}.`
    );
} else {
    console.log("transfer failed : currency mismatch");
}
//...number5
let account = user2;
if(account.type === "savings") {
    const interestresult =account.balance +account.balance *(2/100);
    account.balance =interestresult;
    console.log(`${account.name} has ${account.balance} because of interest`);
}else if (account.type ==="checking") {
    const checkingresult = account.balance - 500;
    account.balance =checkingresult;
    console.log(`${account.name} has ${account.balance} because of checking`);
} else {
    console.log("account does not have specific type");
}

//...number 6
let highestAccount;
let lowestAccount;
if ( user1.balance >user2.balance) {
    highestAccount = user1;
    lowestAccount = user2;
} else {
    highestAccount = user2;
    lowestAccount = user1;
}
if(user3.balance > highestAccount.balance){
    highestAccount = user3;
} else {
    lowestAccount = user3;
}
if (user4.balance > highestAccount.balance) {
    highestAccount = user4;
} else {
    lowestAccount = user4;
}
console.log(
    `highest account is: ${highestAccount.name}'s account, and lowest account is ${lowestAccount.name}'s account`
);

//... number 7
let accountCheck = user2;
let status;
if(account.balance > 0) {
    Status ="Active"
    console.log("Account is Active");
}else if( account.balance === 0) {
    Status = "Empty";
    console.log("Account is empty");
}else if (account.balance < 0) {
    Status = "Overdrawn";
    console.log("Account is overdrawn");
}

//...number 8
console.log(`${account.name} is using a ${!account.type ? "unknown type": account.type} account and has a balance of ${account.currency}, and the status is ${Status}`)

    
