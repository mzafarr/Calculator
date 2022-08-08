class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number == '.') {
            if (this.currentOperand.includes('.')) return;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.operation != undefined) {
            this.operation = operation;
            return;
        }
        if (this.currentOperand == '') return;
        if (this.previousOperand !== '') this.compute();
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation = 0;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
        }
        this.currentOperand = computation.toString();
        this.previousOperand = '';
        this.operation = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;

        if (this.operation != undefined) {
            this.previousOperandTextElement.innerText += this.operation;
        }
    }

}
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberBtns.forEach(btn => btn.addEventListener('click', () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
}));

operationBtns.forEach(btn => btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
}));

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

equalsBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay();
})

// function StopWatch() {

//     let startTime, endTime, running, duration = 0;

//     this.start = () => {

//         if (running) throw new Error('Stopwatch already started.');

//         running = true;

//         startTime = new Date().getSeconds();
//     }

//     this.stop = () => {

//         if (!running) throw new Error('Stopwatch not started yet.');

//         running = false;

//         endTime = new Date().getSeconds();

//         const seconds = endTime - startTime;
//         duration += seconds;
//     }

//     this.reset = () => {
//         running = false;
//         startTime = null;
//         endTime = null;
//         duration = 0;
//     }

//     Object.defineProperty(this, 'duration', {
//         get: () => duration
//     })
// }

// let sw = new StopWatch();

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;

//     this.info = () => {
//         return (`${this.title} by ${this.author}, ${this.pages} pages, ${read}`)
//     }
// }

// myBook = new Book('book', 'Zafar', 313, "read it");
// console.log(myBook.info());


// function User(name, email) {
//     this.name;
//     this.email;
//     this.online = false;
// }

// User.prototype.login = () => {
//     this.online = true;
//     console.log(`User with name ${this.name} and ${this.email} logged in`);
// }

// User.prototype.logout = () => {
//     this.online = false;
//     console.log(`User with name ${this.name} and ${this.email} logged out`);
// }

// function Admin(...args) {
//     //User.apply(this, args);
//     this.role = 'CEO';
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype = Object.create(User);

// Admin.prototype.deleteUser = () => {

// }

// user1 = new User("zafar", "z@gmail.com");
// user2 = new User("Muhammad", "m@gmail.com");



