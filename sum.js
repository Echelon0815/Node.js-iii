function sum (num) {
    let parameter = Math.abs(Math.floor(num));
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

console.log(1) // 1;
console.log(2) // 3;
console.log(3) // 6;

console.log(sum(0));
console.log(sum(1));
console.log(sum(10));
console.log(sum(-3));