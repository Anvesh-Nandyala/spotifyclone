console.log("Welcone to Spotify");
// initialize the variables
let songIndex=1;
let audioElement=new Audio('songs/0.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: " Safe and Sound",filePath:"songs/0.mp3",coverPath:"covers/ss.jpg"},
    {songName: " Alone",filePath:"songs/1.mp3",coverPath:"covers/aw.jpg"},
    {songName: " The Spectre",filePath:"songs/2.mp3",coverPath:"covers/aw.jpg"},
    {songName: " Sweater Weather",filePath:"songs/3.mp3",coverPath:"covers/sw.jpg"},
    {songName: " The Nights",filePath:"songs/4.mp3",coverPath:"covers/avicii.jpg"},
    {songName: " Levels",filePath:"songs/5.mp3",coverPath:"covers/avicii.jpg"},
]
songItems.forEach((elemnet,i)=>{
    elemnet.getElementsByTagName("img")[0].src=songs[i].coverPath;
    elemnet.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        
        document.getElementById(songIndex).classList.add('fa-pause-circle');

        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

        document.getElementById(songIndex).classList.remove('fa-pause-circle');
        
        document.getElementById(songIndex).classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
    console.log(progress);
    if(progress==100){
        if(songIndex==6){
            songIndex=1;
        }
        else{
            songIndex+=1;
        }
        audioElement.src=`songs/${songIndex-1}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        makeAllPlays();
        if(songIndex===1){
            document.getElementById(6).classList.remove('fa-pause-circle')
            document.getElementById(6).classList.add('fa-play-circle')
            document.getElementById(songIndex).classList.remove('fa-play-circle');
            document.getElementById(songIndex).classList.add('fa-pause-circle');
        
        }
        else{
            document.getElementById(songIndex).classList.remove('fa-play-circle')
            document.getElementById(songIndex).classList.add('fa-pause-circle')
        }

    }
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        // console.log(index);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`songs/${songIndex-1}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;    
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex==1){
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex-1}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    if(songIndex===1){
        document.getElementById(1).classList.remove('fa-play-circle')
        document.getElementById(1).classList.add('fa-pause-circle')
        
    }
    else{
        document.getElementById(songIndex).classList.remove('fa-play-circle')
        document.getElementById(songIndex).classList.add('fa-pause-circle')
    }
    
    document.getElementById(songIndex-1).classList.remove('fa-pause-circle');
    document.getElementById(songIndex-1).classList.add('fa-play-circle');


})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex==6){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex-1}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    if(songIndex===1){
        document.getElementById(6).classList.remove('fa-pause-circle')
        document.getElementById(6).classList.add('fa-play-circle')
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-pause-circle');
        
    }
    else{
        document.getElementById(songIndex).classList.remove('fa-play-circle')
        document.getElementById(songIndex).classList.add('fa-pause-circle')
    }
    
    // document.getElementById(songIndex+1).classList.remove('fa-pause-circle');
    // document.getElementById(songIndex+1).classList.add('fa-play-circle');
})



