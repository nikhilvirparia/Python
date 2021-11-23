// create a function that, given an input string, returns a boolean true/false wheather parentheses in that string are valid

function parensValid(str) {
    num = 0;
    for(var i = 0; i < str.length; i++) {
        if (str[i] === "("){
            num++;
            console.log(num);
        } else if ( str[i] === ")") {
            num--;
            console.log(num)
        } else if (num == -1) {
            return false
        }
    }
    if (num == 0) {
        return true
    } else return false
    
}

console.log(parensValid("y(3(p)p(3)r)s"))
console.log(parensValid("n(0(p)3"))
console.log(parensValid("n)e(t(o)k"))
console.log(parensValid("((())"))
console.log(parensValid("()()()()()()("))