from Ninja import Ninja
from Pet import Pet


John = Ninja("John", "Smith", ["biscuit"], ["biscuit"],Pet("Sam", "Cat", "Rollaround"))

John.walk() # + 5 Health
John.feed() # + 10 Health + 5 energy
John.bathe() # Say

print(John.pet.health)
print(John.pet.energy)
