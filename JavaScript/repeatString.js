function mmbStringRepeat(str, count = 5, space = false) {
    // Store the final repeated string
    let result = "";
    //  space if true, empty if false (Default)
    let separator = space ? " " : "";

    for (let i = 0; i < count - 1; i++) {
        result += str + separator;
    }
    //Add the last instance of the string without separator
    if (count > 0) {
        result += str;
    }
    // Return the final repeated string
    return result;
}
console.log(mmbStringRepeat("Code")); // CodeCodeCodeCodeCode
console.log(mmbStringRepeat("Code", 3)); // CodeCodeCode
console.log(mmbStringRepeat("Code", 3, true)); // Code Code Code
console.log(mmbStringRepeat("Code", 0)); // empty String
