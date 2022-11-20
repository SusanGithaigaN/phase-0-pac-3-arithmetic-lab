// add
function add(a, b){
    return(a + b);
}

//subtract
function subtract(a, b){
    return (a - b);
}

//divide
function divide(a, b){
    return (a /= b)
}
//multiply
function multiply(a, b){
    return (a *= b)
}

//increment
function increment(a){
    return(a+1);
}
//decrement
function decrement(b){
   return(b-1);
}
//integer parsing
function makeInt(n){
    let nInteger = parseInt(n,10);
    if (isNaN(nInteger)){
    return parseInt(NaN, 10);
    }
    return nInteger;
}
function preserveDecimal(n){
    const number = parseFloat(n);
    return(parseFloat(n));
    
}
