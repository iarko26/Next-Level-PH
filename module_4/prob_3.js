// Problem Statement
// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false


function validString(str){

const stack=[];
const bracketmap={
    ")":"(",
    "}":"{",
    "]":"["
}
//0(n)
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if(bracketmap[element]){
        if(stack.length===0 ||stack.pop()!==bracketmap[element]){
            return false;
        }
        
    }
    else{
        stack.push(element);
    }

    

}
return true;
}

console.log(validString("()[]{}"));



