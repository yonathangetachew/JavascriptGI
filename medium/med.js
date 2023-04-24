const lower = "hello"
const upper = "HELLO"
const mid = "Hello"

function yellOrWhisper(wordToCheck) {
    if (wordToCheck === wordToCheck.toLowerCase()) {
        return "whispering.";
    }
    else if (wordToCheck === wordToCheck.toUpperCase()) {
        return "YELLING!";
    }
    else {
        return "neither whispering nor yelling.";
    }
}

console.log("person A is " + yellOrWhisper(lower));
console.log(`PERSON B IS ${yellOrWhisper(upper)}`);
console.log(`Person C is ${yellOrWhisper(mid)}`);