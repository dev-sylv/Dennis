// Local module is a module by self (self created module)

function add ( a, b, c ) {
    return a + b + c;
}

function sub ( a, b ) {
    return a - b;
}

function multiply ( a, b ) {
    return a * b;
}

module.exports = {
    add,
    multiply
}