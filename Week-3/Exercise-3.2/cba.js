function sum(a, b){
    return this.a + this.b;
}

console.log('Without using Call, Bind and Apply, the output is => ' + sum(10, 20));

//Demonstration of bind()
const sumT = sum.bind({a:10, b: 20});

console.log('When using bind, the output is => ' + sumT());
//The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
//with a given sequence of arguments preceding any provided when the new function is called.


//Demonstration of call()
function sumNew(){
    var reply = [
        this.a + this.b
    ];
    console.log('When using call, the output is => ' + reply);
}

var sumC = {a:10, b:20};

sumNew.call(sumC);
//The call() method calls a function with a given this value and arguments provided individually.



//Demonstration of apply()
var numbers = [10, 20, 15, 30, 22];

var max = Math.max.apply(null, numbers);

var min = Math.min.apply(null, numbers);

console.log('When using apply, the maximum and minimum number in the array is ' + max + ' and ' + min + ' respectively');
//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

//Note: While the syntax of apply() is almost identical to that of call(), 
//the fundamental difference is that call() accepts and argument list, while apply() accepts a single array of arguments.

