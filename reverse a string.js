function reverseString(str) {
    let newStr = "";
    for (let x= str.length-1; x>=0; x--){
      newStr += str[x];
    }
    return newStr;
  }
  
  or 
  
function revString(str){
    return str.split('').reverse().join('')
} 
