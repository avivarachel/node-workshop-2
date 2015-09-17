// 1. CPS first character of string

function firstCharacter (string, ret) { // created function
    ret(string[0]);
} // rather than returning a value, the function will pass control onto a continuation (ret)

firstCharacter("Aviva", function(string) {console.log(string)});

// 2. CPS last character

function lastCharacter (string, ret) {
    ret(string[string.length-1]);
}

lastCharacter("bears", function(string) {console.log(string)});

// 3. CPS first and last character

function getFirstAndLast(word, cont) {
    firstCharacter(word, function(firstCharacter) {
        lastCharacter(word, function(lastCharacter){
            cont(firstCharacter + lastCharacter);
        });
    } )
}

getFirstAndLast("hello", function(newStr) { console.log(newStr); });

// 4. 



