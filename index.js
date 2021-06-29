let a=document.querySelectorAll(".drum");

for(i=0;i<a.length;i++)
{
    a[i].addEventListener("click",handleclick);
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  
  });

function handleclick()
{
    let audio;
    let nmap =new Map();
    nmap['w']="tom-1.mp3";
    nmap['a']="tom-2.mp3";
    nmap['s']="tom-3.mp3";
    nmap['d']="tom-4.mp3";
    nmap['j']="snare.mp3";
    nmap['k']="crash.mp3";
    nmap['l']="kick-bass.mp3";
    let p=this.innerHTML;
    //console.log(p);
    audio=new Audio("sounds/"+nmap[p]);
    audio.play();
}


//= new Audio("sounds/tom-1.mp3")