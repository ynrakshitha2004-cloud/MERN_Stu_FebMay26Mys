const wallet = {
    owner: "Rakshuu",
    balance: 300,
    lastTransaction: null,

    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };
    },
 
    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdraw amount");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;

        this.lastTransaction = {
            type: "WITHDRAW",
            amount: amount,
            balanceAfter: this.balance
        };
    }
};

wallet.deposit(200);
wallet
console.log(wallet);

//We created a wallet object with properties owner, balance, and lastTransaction.

//Two methods are added: deposit() and withdraw().

//The this keyword is used to access the wallet's own properties.

//Validation checks if the amount is a number and greater than 0.

//Withdraw works only if balance is sufficient.

//After each successful transaction, lastTransaction object is updated.