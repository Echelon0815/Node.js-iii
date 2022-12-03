function sum (num) {
    //只適用整數
    //用變成絕對值，再挑整數 -8.5 -> -9 |-8.5| -> 8
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

console.time(sum(0));
console.timeEnd(sum(0));
console.time(sum(1));
console.timeEnd(sum(1));
console.time(sum(-5));
console.timeEnd(sum(-5));
console.time(sum(10));
console.timeEnd(sum(10));
console.time(sum(10000));
console.timeEnd(sum(10000));