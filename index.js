var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('bull');
var tom = new Cat();
var mouse = new Mouse('jerry');

dog.eat(tom);
console.log(dog);
try{
	tom.eat(dog);
} catch (error) {
	console.log('error while cat eating a dog')
}
console.log(tom);
