var pl1=prompt("PLAYER 1 NAME:");
var pl2=prompt("PLAYER 2 NAME:");

document.querySelectorAll("p")[0].innerHTML=pl1;
document.querySelectorAll("p")[1].innerHTML=pl2;


var randomNumber1= Math.floor(Math.random()*6)+1;

var randomImg1="dice"+randomNumber1+".png";

var imageSrc1="images/"+randomImg1;

document.querySelectorAll("img")[0].setAttribute("src", imageSrc1);


var randomNumber2= Math.floor(Math.random()*6)+1;

var randomImg2= "dice"+randomNumber2+".png";

var imgSrc2= "images/"+randomImg2;

document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=pl1+" Won🚩";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=pl2+" Won🚩";
}
else{
    document.queryselector("h1").innerHTML="Draw...!";
}