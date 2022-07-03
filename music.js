var myMusic=document.getElementById("music");
var myIcon=document.getElementById("icon");
myIcon.onclick = function(){
    if(myMusic.paused){
        myMusic.play();
        myIcon.src="Images/pause2.png"
    }
    else{
        myMusic.pause();
        myIcon.src="Images/play2.png"
    }
}