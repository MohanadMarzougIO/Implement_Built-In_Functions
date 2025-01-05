function mmbStringLength(str = "") {
    let count = 0;
    while (str[count] != undefined) {
        count++;
    }
    return count;
}

console.log(mmbStringLength("")); //0
console.log(mmbStringLength("Welcome To JavaScript")); // 21
console.log(mmbStringLength()); // 0
