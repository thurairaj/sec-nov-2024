class Calculator {
    constructor() {
        this.left = 0;
        this.right = null;
        this.operator = null;
    }

    //  12345678754+4
    display() {
        if (this.operator === null || this.right === null)
            return this.left.toString();
        else
            return this.right.toString();
    }


    setNumberInput(numberInput) {
        if (this.operator === null)
            this.left = parseInt(`${this.left.toString()}${numberInput}`)
        else if (this.right === null)
            this.right = parseInt(numberInput);
        else
            this.right = parseInt(`${this.right.toString()}${numberInput}`)
    }

    setOperationInput(operationInput) {
        if (OPERATION[operationInput] === OPERATION.CLEAR) {
            this.clear();
            return;
        }
        if (this.operator !== null)
            this.operation()

        this.operator = operationInput;
    }

    operation() {
        const operator = OPERATION[this.operator];
        if (operator === null) return;

        if (operator === OPERATION.ADD) this.add();
        if (operator === OPERATION.MINUS) this.minus();
        if (operator === OPERATION.MULTIPLY) this.multiply();
        if (operator === OPERATION.EQUAL) this.equal();
    }

    add(){}
    minus(){}
    multiply(){}
    clear(){
        this.left = 0;
        this.right = null;
        this.operator = null;
    }
    equal() {

    }
}

