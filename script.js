const kits=["crash","kick","snare","tom"];
const containerE= document.querySelector(".container");

kits.forEach((kit)=>{
    const button= document.createElement("button");
    containerE.appendChild(button);
    button.innerText=kit;
    button.classList.add("btn");
    button.style.backgroundImage="url(picture/"+kit+".jpg)";
    
   const audioE=document.createElement("audio");
   audioE.src="sounds/"+kit+".wav"
   containerE.appendChild(audioE);

    button.addEventListener("click",()=>{
        audioE.play();
    })


})