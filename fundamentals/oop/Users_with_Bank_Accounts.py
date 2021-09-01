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


class User:
    def __init__(self, name, bankaccount, e_mail):
        self.name = name
        self.bankaccount = bankaccount
        self.e_mail = e_mail

    def make_deposit(self, amount):
        self.bankaccount.deposit(amount)
       # print(self.bankaccount.balance) // Show the balance
        return self

    def make_withdraw(self, amount):
        self.bankaccount.withdraw(amount)
        return self

    def display_user_balance(self):
        self.bankaccount.display_account_info()
        return self


Nick = User("Nick", BankAccount(0.01, 100), "nick@gmail.com")

# print(Nick.bankaccount.balance)
Nick.make_deposit(100)
Nick.display_user_balance()
