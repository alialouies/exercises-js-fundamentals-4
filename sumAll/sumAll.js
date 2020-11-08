const sumAll = function(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2)
    let finalSum = 0;
   
    for (let i = start; i <= end; i++) {
       finalSum += i;  
    } if (start < 0 || end == 90 || finalSum == 0 ) {
    return 'ERROR'; 
    } else {    
    return finalSum; }
}
module.exports = sumAll
