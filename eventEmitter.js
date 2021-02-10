const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1, num2) => {
    console.log(num1 + num2)
})

// eventEmitter.emit('tutorial', 1,1)

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let iris = new Person('Iris');
let christine = new Person('Christine')

iris.on('name', (age) => {
    console.log(`My name is ${iris.name} and I am ${age} years old`)
})

christine.on('name', () => {
    console.log(`My name is ${christine.name}`)
})

iris.emit('name', 23)
christine.emit('name')