
const button = document.getElementById("btn");
const audio = document.createElement("audio");
const containerBox = document.getElementById("contain");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const disregard = document.getElementById("box");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");


const letters = ["H", "A", "P", "P", "Y", "B", "I", "R", "T", "H", "D", "A", "Y"];

const SongLyrics = [{time: 0, text: "HELLO"}, {time: 5, text: "THIS SONG, IS JUST FOR YOU!"}, {time: 12, text: "happy birthday to you"}, {time: 14, text: "happy birthday to You"}, {time:18 , text: "Happy Birthday,"}, {time: 19, text: "Happy Birthday 🎈"}, {time: 21, text: "HAPPY BIRTHDAY TO YOU"}, {time: 40, text: "happy birthday to you"}, {time: 44, text: "happy birthday to YOU"}, {time: 48, text: "Happy Birthday"}, {time: 50, text: "Happy Birthday"}, {time: 53, text: "HAPPY BIRTHDAY TO YOU"}, {time: 54, text: "."}, {time: 55, text: ".."}, {time: 56, text: "..."}, {time: 57, text: "😊"}];

button.addEventListener("click", () => {
    
    disregard.remove();
    audio.src = "Happybirthday.mp3";
    audio.play();
    
    document.body.appendChild(div1);
    div1.append(p1);
    div1.append(h1);
    document.body.appendChild(div2);
    
    
    div1.className = "card";
    div2.className = "lyric-container";
    div2.id = "contain";
    div2.append(h2);
    div2.append(p2);
    
    h2.textContent = "HAPPY BIRTHDAY SONG";
    p2.textContent = "Lyrics";
    
    
    
    for(let i = 0; i < letters.length; i++){
       const span = document.createElement("span");
       span.textContent = `${letters[i]}`;
       p1.append(span);
    }
    
    
    h1.innerHTML = `<br>HANNA`;
    
    
    
    audio.ontimeupdate = () => {   
    for(let i = 0; i < SongLyrics.length; i++){
        
        if(audio.currentTime >= SongLyrics[i].time){
            p2.innerHTML = `${SongLyrics[i].text}`;
        }     
    }
    
    
    }
    
});
