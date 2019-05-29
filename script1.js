const elem = document.getElementById('elem');
const cursor = document.getElementById('cursor');
let i = 0;
const par = `Hello! My name is Arpine. I am 28. I have graduated YSU, 
faculty of physics	in 2011. Then  I have studied in ASUE, faculty of finance. Now I work at Inecobank CJSC. 
But I want to be good front-end-developer, so now I learn Java Script in ACA.
And the most important info, I have two daughters. And for my family I want to reach everything!`;

function typeText(){
	/*cursor.toggleClass('active');*/
	if(i < par.length){
		elem.textContent += par.charAt(i);
		i++;
		setTimeout(typeText, 70);
	}else{
		cursor.remove();

	}
}
typeText();



