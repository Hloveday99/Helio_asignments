function Dog() { }

Dog.speak = function(bark) {
  return speak;
}

Dog.name = function(bailey) {
  return this;
}

const obj = new Dog();
const speak = obj.speak;
speak(); 

const name = Dog.name;
name();
console.log(bark,bailey)