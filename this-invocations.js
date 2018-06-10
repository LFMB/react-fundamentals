// Handling 'this' in js


// Implicit Binding
// Explicit Binding
// new Binding
// window Binding

// Where is function invoked?
var sayName = function(name){
	console.log('Hello ' + name);
};


sayName('Lucas');


// Implicit Binding

var me = {
	name: 'Lucas',
	age: 30,
	sayName: function(){
		console.log(this.name);
	}
};

// whatever left of the 'dot'
me.sayName();


var sayNameMixin = function(obj){
	obj.sayName = function(){
		console.log(this.name);
	};
};

var me = {
	name: 'Lucas',
	age: 30
}

var gf = {
	name: 'Jackie',
	age: 23
}

me.sayName();
gf.sayName();


var Person = function(name, age){
	return{
		name: name,
		age: age,
		sayName: function(){
			console.log(this.name);
		},
		mother: {
			name: 'Stacey',
			sayName: function(){
				console.log(this.name);
			}
		}
	};
};

var jim = Person('Jim', 42);
jim.sayName();
// outputs Jim
jim.mother.sayName();
// outputs Stacey





// Explicit Binding
var sayName = function(){
	console.log('My name is ' + this.name);
}

var stacey = {
	name: 'Stacey',
	age: 34
}

// the the call method will explicitly use make the this equal the stacey object
sayName.call(stacey);



var sayName = function(lang1, lang2, lang3){
	console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
}



var languages = ['JavaScript', 'Ruby', 'Python'];

// stacey is the context and the rest are arguments 
sayName.call(stacey, languages[0], languages[1], languages[2]);

// outputs the same as above
sayName.apply(stacey, languages);

// will bind all that info to a new function that can be invoked later
var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
newfn();


// new Binding

var Animal = function(color, name, type){
	// this = {}
	this.color = color;
	this.name = name;
	this.type = type;
};

var zebra = new Animal('bland and white', ' Zorro', ' Zebra');

// window Bidimg
var sayAge = function(){
	console.log(this.age);
};

var me = {
	age: 25
}

// normally would have to do:
sayAge.call(me);

// outputs undefined
sayAge();

window.age = 35;
// outpurs 35
sayAge();


// prevents window Binding
var sayAge = function(){
	'use strict'
	console.log(this.age);
};