const decreaseBtn = document.getElementById("decreaseBtn")
const increaseBtn = document.getElementById("increaseBtn")
const resetBtn = document.getElementById("resetBtn")
const countLabel = document.getElementById("countLabel")

let count = 0;
let catImg = ["beluga.jpg","choke.jpg","crying.jpg","grumpy.jpg"];

function newCat(){
    let ranNum = Math.floor(Math.random() * catImg.length);
    console.log(ranNum);
    let img = new Image();
    img.src = catImg[ranNum];
    img.style.width = "10vw";
    document.getElementById('cats').appendChild(img);
}

function newMeow(){
    let ranNum = Math.floor(Math.random() * 3 +1);
    console.log(ranNum);
    let audio = new Audio();
    audio.src = `meow${ranNum}.mp3`;
    audio.loop = true;
    audio.autoplay = true;
    document.getElementById("meow").appendChild(audio);
}

increaseBtn.onclick = function(){
    count += 1;
    countLabel.textContent = count;
    newCat();
    newMeow();
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    document.getElementById("cats").innerHTML = "";
    document.getElementById('meow').innerHTML = '<audio id="audio-player" autoplay = "true" src="angry cat.wav" type="audio/wav">';
}

