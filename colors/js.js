
function redColor(){
    let red;
    return function(r){
    red= document.getElementById("red").value;
    document.getElementById("putRed").value = red;  
    return red; 
    }   
}       

function greenColor(){
    let green;
    return function(g){
    green = document.getElementById("green").value;
    document.getElementById("putGreen").value = green;
    return green;  
    }
}

function blueColor(){
    let blue;
    return function(b){
    blue = document.getElementById("blue").value;
    document.getElementById("putBlue").value = blue;   
    return blue;  
    }
}

let rColor = redColor();
let bColor = blueColor();
let gColor = greenColor();

function changeColor(event){
    let r = rColor(event.target.value);
    let g = gColor(event.target.value);
    let b = bColor(event.target.value);
    document.getElementById("colors").style.backgroundColor = "rgb("+r+","+g+","+b+")";   
    document.getElementById("div").innerHTML= "rgb("+r+","+g+","+b+")";
}   

function colorGradient(){
    let r = rColor(event.target.value);
    let g = gColor(event.target.value);
    let b = bColor(event.target.value);
    r = Number(r);
    g = Number(g);
    b = Number(b);
    
    r = r + (0.25 * (255 - r))
    g = g + (0.25 * (255 - g))
    b = b + (0.25 * (255 - b))
    document.getElementById("first").style.backgroundColor ="rgb("+r+","+g+","+b+")";
    r = r + (0.25 * (255 - r))
    g = g + (0.25 * (255 - g))
    b = b + (0.25 * (255 - b))
    console.log("rgb("+r+","+g+","+b+")");
    document.getElementById("second").style.backgroundColor ="rgb("+r+","+g+","+b+")";
    r = r + (0.25 * (255 - r))
    g = g + (0.25 * (255 - g))
    b = b + (0.25 * (255 - b))
    console.log("rgb("+r+","+g+","+b+")");
    document.getElementById("third").style.backgroundColor ="rgb("+r+","+g+","+b+")";
    r = r + (0.25 * (255 - r))
    g = g + (0.25 * (255 - g))
    b = b + (0.25 * (255 - b))
    console.log("rgb("+r+","+g+","+b+")");
    document.getElementById("fourth").style.backgroundColor ="rgb("+r+","+g+","+b+")";
    r = r + (0.25 * (255 - r))
    g = g + (0.25 * (255 - g))
    b = b + (0.25 * (255 - b))
    console.log("rgb("+r+","+g+","+b+")");
    document.getElementById("fifth").style.backgroundColor ="rgb("+r+","+g+","+b+")";
 
}

   
    // let k = 0.25;
    // let items = ["first", "second", "third", "fourth", "fifth"];
    // for (let i = 1; i < 6; i++) {
    //     r = r + (i * k * (255 - +r))
    //     g = g + (i * k * (255 - +g))
    //     b = b + (i * k * (255 - +b))
    //     console.log(r, g, b);
    // document.getElementById(items[i - 1]).style.backgroundColor ="rgb("+r+","+g+","+b+")";
    // }