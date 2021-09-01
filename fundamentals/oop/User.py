class User:

    def __init__(self, name):
        self.name = name
        self.amount = 0

    def make_deposit(self, amount):
        self.amount += amount

    def make_withdrawl(self,amount):
        self.amount -= amount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.amount}")

    def transfer_money(self,amount,user):
        self.amount -= amount
        user.amount += amount
        self.display_user_balance()
        user.display_user_balance()


Jack = User("Jack")
Nick = User("Nick")
Andrew = User("Andrew")

Jack.make_deposit(1000)
Jack.make_deposit(2000)
Jack.make_deposit(500)
Jack.make_withdrawl(100)
Jack.display_user_balance()

Nick.make_deposit(100)
Nick.make_deposit(500)
Nick.make_withdrawl(200)
Nick.make_withdrawl(100)
Nick.display_user_balance()

Andrew.make_deposit(6000)
Andrew.make_withdrawl(200)
Andrew.make_withdrawl(500)
Andrew.make_withdrawl(300)
Andrew.display_user_balance()


Jack.transfer_money(1000, Andrew)