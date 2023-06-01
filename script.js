console.log("welcome");

// Initializing the variables

let songIndex = 0; //which song is playing
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));




let songs = [
    {songName:"Chanel", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Trap", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"Style", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"Rare", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Black", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Dance", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Back ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"Blue", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"True", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
]


songItem.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});



//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})




// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log("timeupdate")

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
    // console.log(progress);
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

// const makeAllPlays= ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.addEventListener('click', () => {
//             if(audioElement.paused || audioElement.currentTime<=0){
//                 audioElement.play();
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
        
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//             }
//             else{
//                 audioElement.pause();
//                 element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//         // masterPlay.classList.remove('fa-pause-circle');
//         // masterPlay.classList.add('fa-play-circle');

//             }
        
       
//     })
    
//     })

    const makeAllPlays= ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }



 const updateplay = () => {
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');  

 }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=> {
    //    console.log(e.target);
       songIndex = parseInt(e.target.id);
       makeAllPlays();
       
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle'); //add pause onclick as the song is playing
       
       updateplay();
    })

})


document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=9){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    updateplay();
    
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex -= 1;
    }
    updateplay();
})


// progress = (current time/duration)*100 line 50 in percent
//current time = (progress * duration)/100 line 56