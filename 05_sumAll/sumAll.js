const sumAll = function(num, num2) {
    if(typeof num == "string" || typeof num2 == "string")
    return 'ERROR';
    if(num < 0 || num2 < 0)
    return 'ERROR';
    if(typeof num == "object" || typeof num2 == "object") 
    return 'ERROR';
    
    let min = Math.min(num, num2);
	let max = Math.max(num, num2);
	let sum = 0;

	for(i = min; i <= max; i++){
		sum = sum + i
		
	}
	return sum;

};
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
