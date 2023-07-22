console.log("spotify");

let songindex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');

let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songname: "fallen comrade", filepath: "song/1.mp3", coverpath:"covers/1.jpg"},
    {songname: "Alive", filepath: "song/2.mp3", coverpath:"covers/2.jpg"},
    {songname: "PonyGentle Melodies", filepath: "song/3.mp3", coverpath:"covers/3.jpg"},
    {songname: "Prejudice", filepath: "song/4.mp3", coverpath:"covers/4.jpg"},
    {songname: "Enchanted Reverie", filepath: "song/5.mp3", coverpath:"covers/5.jpg"},
    {songname: "Harmony Haven", filepath: "song/6.mp3", coverpath:"covers/6.jpg"},
    {songname: "Soothing Horizons", filepath: "song/7.mp3", coverpath:"covers/7.jpg"},
    {songname: "Velvet Twilight", filepath: "song/8.mp3", coverpath:"covers/8.jpg"},
    {songname: "Calm Cascades", filepath: "song/9.mp3", coverpath:"covers/9.jpg"},
    {songname: "Luminous Lullabies", filepath: "song/10.mp3", coverpath:"covers/10.jpg"},
]

songItems.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].src = songs[i].songname;
    
});

masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
} )

audioElement.addEventListener('timeupdate', ()=>
{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    
    progressbar.value = progress;
}
)

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressbar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>
{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{
    element.addEventListener('click', (e)=>{
       
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })


}
)

document.getElementById('next').addEventListener('click', ()=>
{
    if(songindex>=9)
    {
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioElement.src = `song/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>
{
    if(songindex <= 0)
    {
        songindex = 0;
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `song/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

