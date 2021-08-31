class BankAccount:
    accounts = []

    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.01, balance=0):
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.accounts.append(self)

    # your code here! (remember, instance attributes go here)
    # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
        self.balance = amount + self.balance
        return self

    def withdraw(self, amount):
        # your code here
        if self.balance >= amount: 
            self.balance = self.balance - amount
        else: 
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    @classmethod
    def display_bank_accounts(cls):
        for x in cls.accounts:
            x.display_account_info()

    def display_account_info(self):
        # your code here
        print("Balance:", self.balance)
        return self

    def yield_interest(self):
        # your code here
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        else: 
            print("balance is negative")
        return self



Nick = BankAccount(0.01, 100000000)
Andrew = BankAccount(0.05, 10)

BankAccount.display_bank_accounts()

Nick.deposit(10).deposit(30).deposit(10000).withdraw(1).yield_interest().display_account_info()
Andrew.deposit(90).deposit(100).withdraw(25).withdraw(25).withdraw(25).withdraw(25).yield_interest().display_account_info()