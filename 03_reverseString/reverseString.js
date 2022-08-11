const reverseString = function(str) {
        // Check input
        /*if(!str || str.length < 0 ||
                typeof str!== 'string') {
            return 'Not valid';
        }*/
         
        // Take empty array revArray
        const revArray = [];
        const length = str.length - 1;
         
        // Looping from the end
        for(let i = length; i >= 0; i--) {
            revArray.push(str[i]);
        }
         
        // Joining the array elements
        return revArray.join('');

};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');


// Do not edit below this line
module.exports = reverseString;
