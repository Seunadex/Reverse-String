"use strict";

const reverseString = (input) =>{
	let result = input.split('').reverse().join('');
	if(input.length === 0){
		return null;
	}
	else if (result === input) {
		return true;
	}
	else {
		return result;
	}
}

module.exports = {
	reverseString : reverseString
}