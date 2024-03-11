// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
x = null
y = null
    console.log(x)
// COLLECT FIRST NUMBER FROM USER
    do {
        x = prompt('Enter your first number:')
        x = parseFloat(x)
        if (isNaN(x)) {
            alert('Please enter a valid numerical value')
        }
    } while (isNaN(x))

// COLLECT SECOND NUMBER FROM USER
    do {
        y = prompt('Enter your second number:')
        y = parseFloat(y)
        if (isNaN(y)) {
            alert('Please enter a valid numerical value')
        }
    } while (isNaN(y))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    do {
        operation = prompt('Which operation would you like to perform? (+, -, *, /)')
        if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
            alert('Please enter a valid operation.')
        } else {
            switch (operation) {
                case '+':
                    solution = x + y
                    break
                case '-':
                    solution = x - y
                    break
                case '*':
                    solution = x * y
                    break
                case '/':
                    solution = x / y
            }
            alert(`${x} ${operation} ${y} = ${solution}`)
        }
    } while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/')
}
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate()
