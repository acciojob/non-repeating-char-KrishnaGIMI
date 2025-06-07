function firstNonRepeatedChar(str) {
 // Write your code here
	const hash = new Map();
	for (let i = 0; i < str.length; i++) {
		if(hash.get(str[i])){
			hash.set(str[i], hash.get(str[i])+1);
		}
		else{
			hash.set(str[i], 1);
		}
	}
	for(let i = 0; i < str.length; i++){
		if(hash.get(str[i])==1){
			return str[i]; 
		}
	}
	return null;
}
const input = prompt("Enter a string ");
alert(firstNonRepeatedChar(input)); 



