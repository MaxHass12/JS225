function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  const account = {
    number,
    balance() {
      return balance;
    },
    transactions() {
      return transactions;
    },
    deposit(value) {
      balance += value;
      const currentTransaction = {
        type: 'deposit',
        amount: value,
      }
      transactions.push(currentTransaction);
      return value;
    }, 
    withdraw(value) {
      const amountWithdrawn = value > balance ? balance : value;
      balance -= amountWithdrawn;
      const currentTransaction = {
        type: 'withdrawal',
        amount: amountWithdrawn,
      }
      transactions.push(currentTransaction);
      return amountWithdrawn;
    },
  };

  return account;
}

function makeBank() {
  accounts = [];
  const bank = {
    openAccount() {
      const number = accounts.length + 101;
      const newAccount = makeAccount(number);
      accounts.push(newAccount);
      console.log('account created');
      return newAccount;
    },
    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
      console.log('transfer completed');
    }

  };
  return bank;
}

let bank = makeBank();
let source = bank.openAccount();
source.deposit(10);
let destination = bank.openAccount();
bank.transfer(source, destination, 7);
console.log(source.balance());
console.log(destination.balance());
console.log(bank.accounts);