let count = 0;
let gifs = [
    "gif1.gif",
    "gif/gif2.gif",
    "gif/gif3.gif",
    "gif/gif4.gif",
    "gif/gif5.gif",
    "gif/gif6.gif"

];

function noClick(){
    count++;
    if(count<gifs.length){
        document.getElementById("gif").src = gifs[count];
    }

let texts = [
    "Will You be my Valentine?🌹",
    "Soch le dobara😏",
    "pit jaegii😭",
    "itna maarunga naa😡",
    "Last chance🙄",
    "Will You be my Valentine?🌹huhhh"
];
if(count<texts.length){
    document.getElementById("text").innerHTML = texts[count];
};
if(count==5){
    document.getElementById("no").style.display = "none";
    document.getElementById("text").style.fontSize = "3rem";
}
}
function yesClick(){
  
    document.getElementById("gif").src = "gif/happy.webp";
    document.getElementById("text").innerHTML = "Happy Valentine Day Jaanuuu💗💍";
      document.getElementById("text").style.fontSize = "3.2rem";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";

    if(!document.getElementById("extra-message")){
        const para = document.createElement("p");
        para.id = "extra-message";
        para.innerHTML = "I am the luckiest guy to have you in my life. I love youu soo much babyy!🌹💋<br>Life feels perfect when you’re with me my foreverr🧿💞";
        
        para.style.textAlign = "center";
        para.style.fontSize = "1.5rem";
        para.style.marginTop = "18px";
        para.style.color = "#d63384";
        para.style.fontWeight = "400";
        para.style.lineHeight = "1.6";
        document.querySelector(".out-box").appendChild(para);
    }
}

function createHeart() {
    const container = document.body;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Zyada variety wale emojis
    const emojis = ['❤️', '💖', '💝', '🌸', '🌹', '✨', '💕', '🥰', '🎈', '💘', '🌷'];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    
    heart.style.left = Math.random() * 100 + "vw";
    
    const size = Math.random() * 30 + 20 + "px"; 
    heart.style.fontSize = size;
    
      const duration = Math.random() * 3 + 2 + "s"; 
    heart.style.animationDuration = duration;
    
    heart.style.opacity = Math.random() * 0.5 + 0.5; 

    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}


setInterval(createHeart, 200);

for(let i=0; i<10; i++) {
    setTimeout(createHeart, i * 100);
}
