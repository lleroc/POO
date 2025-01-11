from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def hacerSonido(self):
        pass

class Perro(Animal):
        def hacerSonido():
             print("guau")

class pato(Animal):
     def hacerSonido(self):
          print("cuac")




