
let  songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Warriyo - Mortal",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Cielo",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Heaven",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Heros",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Ranjha",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Forever",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"}
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

Array.from(document.getElementsByClassName("playbutton")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`; 
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`; 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
})

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`; 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
})