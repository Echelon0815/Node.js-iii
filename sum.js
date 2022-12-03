function sum (num) {
    let parameter = Math.floor(Math.abs(num));
    let result = 0;
    if (num == 0) {
        result = 0;
        return result;
    }else if (num > 0){
        result = (1 + parameter)*parameter/2;
        return result;
    }else if (num<0){
        result = -(1 + parameter)*parameter/2;
        return result;
    }
    
}

console.log(sum(1));
console.log(sum(10));
console.log(sum(0));
console.log(sum(-5));
console.log(sum(2.5));
console.log(sum(-7.2));
