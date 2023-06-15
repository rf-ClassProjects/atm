class Account {
  constructor(startingBalance = 0) {
    this.balance = startingBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Cannot withdraw ${amount} from you account. Current balance: ${this.balance}`);
      return;
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

function numPrompt(promptStr, enforceSign = true) {
  while (true) {
    let response = prompt(promptStr);
    try {
      response = Number(response);
      if (!enforceSign || response >= 0) {
        return response;
      } else {
        console.log("Input must be positive");
      }
    } catch {
      console.log("Input must be an integer");
    }
  }
}

function menu(menuActions) {
  console.log("----------");
  menuActions.forEach(function (menuAction, idx) {
    console.log(`${idx}. ${menuAction}`);
  });
  console.log("----------");
  while (true) {
    let menuSelection = prompt("Enter a Menu Selection: ");
    try {
      menuSelection = Number(menuSelection);
      if (menuSelection >= 0 && menuSelection < menuActions.length) {
        return menuSelection;
      } else {
        console.log("Input is out of range of the menu");
      }
    } catch {
      console.log("Input must be a number");
    }
  }
}

function main() {
  let account = new Account();
  while (true) {
    selection = menu(["Deposit", "Withdraw", "View Balance", "Log out"]);
    let amount;
    switch (selection) {
      case 0:
        amount = numPrompt("How much do you want to deposit? ");
        account.deposit(amount);
        break;
      case 1:
        amount = numPrompt("How much do you want to withdraw? ");
        account.withdraw(amount);
        break;
      case 2:
        console.log(account.getBalance());
        break;
      case 3:
        return;
    }
  }
}

main();
console.log("Thanks for banking with Credit Card Fraud Bank!\nHope to see you again soon!");
