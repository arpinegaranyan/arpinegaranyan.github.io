let arr = [];
let i = 0;
let cardsContainer = document.getElementById("cardsContainer");
let colors1 = ["aqua", "gold", "crimson", "cornflowerblue", "darkorange","chartreuse", "fuchsia", "darkorchid"];
randomColors = [...colors1, ...colors1].sort((function(a, b){return 0.5 - Math.random()}));

randomColors.map((color, i) =>{
let div = document.createElement("div");
div.id = i + "-" + color;
div.onclick =function(){change(event)};
cardsContainer.appendChild(div);
div.style.backgroundImage = "url('sun.jpg')";
div.style.height = "80px";
div.style.width = "80px";
div.style.margin = "10px";
div.style.padding = "30px";
div.style.boxShadow = "0px 0px 0px 4px #fac60a8f";
div.style.border = "solid 4px white";
div.style.borderRadius = "9%";

}
)


function change(event){
    
if(event.target.style.backgroundImage === 'url("sun.jpg")')  {  
   
let div = event.target;
let str = event.target.id;
str = str.split("-");
div.style.backgroundImage = "";
div.style.backgroundColor = str[1];
div.style.border = `solid 4px ${str[1]}`;
arr.push(event.target.id);
if (arr.length > 1) {
let last = arr[0];
	if(event.target.id.split("-")[1] !== last.split("-")[1]){
document.getElementById(arr[arr.length-2]).style.backgroundColor = "";
document.getElementById(arr[arr.length-2]).style.border = "";
document.getElementById(arr[arr.length-2]).style.backgroundImage ="url('sun.jpg')"; 
document.getElementById(arr[arr.length-2]).style.border = "solid 4px white";
arr.splice(arr.length-2 , 1);

    }else{
      arr.pop();
      arr.pop();
      i++;
      if(i === 8){
        alert('you win !!!!')
        }
        console.log(i)
        }
    }

}    
}
if(i === 8){
alert('you win !!!!')
}



