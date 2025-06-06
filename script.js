function firstNonRepeatedChar(str) {
 // Write your code here
	const hash = new Map();
	for (let index = 0; index < str.length; index++) {
		if(hash.has(str[i]){
			hash.set(str[i])=hash.get(str[i])+1;
		}
		else{
			hash.get(str[i])=1;
		}
	}
	for(let index = 0; index < str.length; index++){
		if(hash.get(str[i])==1){
			return str[i];
		}
	}
	return "pl";
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
