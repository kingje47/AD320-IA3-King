document.getElementById("div1").addEventListener('click',changeBackground);
document.getElementById("div2").addEventListener('mouseover',addText);
document.getElementById("div2").addEventListener('mouseout',removeText);
document.getElementById("div3").addEventListener('wheel',scrollWheel);
document.getElementById("div4").addEventListener('mousedown',sizeUp);
document.getElementById("div4").addEventListener('mouseup',sizeDown);
document.getElementById("div5").addEventListener('keydown',keyDown);

function changeBackground(){
 document.getElementById("div1").style.backgroundColor="green";
}

function addText(){
    document.getElementById("div2").innerHTML = "Great!";
}

function removeText(){
    document.getElementById("div2").innerHTML="Mouse over me";
}

function scrollWheel(){
    document.getElementById("div3").innerHTML+="o";
}

function sizeUp(){
    document.getElementById("div4").style.width="500px";
    document.getElementById("div4").style.height="500px";
}

function sizeDown(){
    document.getElementById("div4").style.width="100px";
    document.getElementById("div4").style.height="100px";
    
}

function keyDown(){
    document.getElementById("div5").style.backgroundColor="red";
    document.getElementById("div5").innerHTML="Wow!";
}