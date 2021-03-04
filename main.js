var num1=1+Math.floor(Math.random()*6);
var num2=1+Math.floor(Math.random()*6);
var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");
var title=document.querySelector("#title");

showImage(num1,image1);
showImage(num2,image2);

function showImage(num,image){
    imageString="images/dice"+num+".png";
    image.setAttribute("src",imageString);
}

if(num1>num2){
    title.innerHTML="🚩Player 1 Wins!";
}else if(num2>num1){
    title.innerHTML="Player 2 Wins! 🚩";
}else{
    title.innerHTML="Both Lucky!";
}