var tabs = document.querySelectorAll(".tab")
var buttons = document.querySelectorAll("button")

function showTab(event, id){
    for(var x of tabs){
        x.style.display = "none"
        x.style.opacity = "0"
    }
    document.getElementById(id).style.display = "block"

    setTimeout(function(){
        document.getElementById(id).style.opacity = "1"
    })

    for(var x of buttons){
        x.classList.remove("selected")
    }
    event.currentTarget.classList.add("selected")
}

var mySong=document.getElementById("mySongs");
var icon=document.getElementById("icons");

icon.onclick=function(){
    if(mySong.paused){
        mySong.play();
        icon.src="/app/brk.png";
    } else{
        mySong.pause();
        icon.src="/app/click.png";
    }
}
