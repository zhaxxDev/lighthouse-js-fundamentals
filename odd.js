function isOdd(x){
    if (x % 2 === 0){
        return false;
    } else if (x % 2 !== 2){
        return true;
    } else {
        return "invalid";
    }
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));