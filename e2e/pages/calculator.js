var calculator = function(){
    
this.doAddition = function(num1, num2){
    const sum = num1 + num2;
    return sum;
}

this.doSub = function(num1, num2){
    return num1 - num2;
}

this.doMul = function(num1, num2){
    return num1 * num2;
}

this.doDiv = function(num1, num2){
    return num1 / num2;
}

};

module.exports = new calculator();
