let a=document.querySelectorAll(".drum");

for(let i=0;i<a.length;i++)
{
    a[i].addEventListener("click", function() {
        var p = this.innerHTML;
        handleclick(p);
        buttonAnimation(p);
      });
}

function handleclick(p)
{
    console.log(p);
    let audio;
    let nmap =new Map();
    nmap['w']="tom-1.mp3";
    nmap['a']="tom-2.mp3";
    nmap['s']="tom-3.mp3";
    nmap['d']="tom-4.mp3";
    nmap['j']="snare.mp3";
    nmap['k']="crash.mp3";
    nmap['l']="kick-bass.mp3";
    //console.log(p);
    audio=new Audio("sounds/"+nmap[p]);
    audio.play();
    
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }

document.addEventListener("keypress", function(event) {

    handleclick(event.key);
  
    buttonAnimation(event.key);
  
  });
