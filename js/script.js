const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');
const search = document.querySelector('#search');

const songs = [{
    src:"./audio/Godzilla.mp3",
    name:"Godzilla",
    singer:"Eminem",
    img:"./img/eminem.jpg"
},{
    src:"./audio/Amplifier.mp3",
    name:"Amplifier",
    singer:"Imran Khan",
    img:"./img/imran.jpg"
},{
    src:"./audio/Dopeshope.mp3",
    name:"Dope Shope",
    singer:"Honey Singh",
    img:"./img/honey.jpg"
},{
    src:"./audio/Satisfya.mp3",
    name:"Satisfya",
    singer:"Imran Khan",
    img:"./img/imran.jpg"
},{
    src:"./audio/Lovetheway.mp3",
    name:"Love the way",
    singer:"Eminem",
    img:"./img/eminem.jpg"
}];

let pics = '';
songs.forEach((element)=>{
    const albumSrc = `<div class="myCard">
                            <img src=${element.img} alt="img" class="img-fluid" />
                        </div>`;
    pics+=albumSrc;
    document.querySelector('.allCard').innerHTML=pics;
})

let content = ""
songs.forEach((element,index)=>{
    const playlist = `<div class="playlistCard">
                            <div class="d-flex align-items-center">
                                <div>
                                <img src=${element.img} alt="img" class="img-fluid rounded-circle" />
                                </div>
                                <audio src=${songs[index].src} id="playlistContent"></audio>
                                <div class="ms-2">
                                <h4 class="text-muted fw-bold">${element.name}</h4>
                                <h6 class="text-muted">--${element.singer}</h6>
                                </div>
                            </div>
                            <span class="playlistBtn"><i class="fa-solid fa-play "></i></span>
                        </div>`;
    content+=playlist;
    document.querySelector('.playlist').innerHTML=content;
})

let count = 0;
nowPlaying(count);

function nowPlaying(index){
    const myplayer = document.querySelector('.myplayer');
    const player =  `<div id="mainCard">
                        <div class="coverPhoto">
                        <img
                            src=${songs[index].img}
                            alt="img"
                            class="img-fluid rounded-circle mb-3"
                        />
                        </div>
                        <div class="audioFile">
                        <audio src=${songs[index].src}></audio>
                        </div>
                        <p id="songTitle">${songs[index].name}</p>
                        <span id="singerName">${songs[index].singer}</span>
                    </div>`;
    myplayer.innerHTML = player;
}

search.addEventListener('keyup',(e)=>{
    const playlistCard = document.querySelectorAll('.playlistCard');
    e.preventDefault();
    const filter = e.target.value.trim();

    playlistCard.forEach((element)=>{
        if(element.textContent.includes(filter)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})

function playFunc(){
    const audio = document.querySelector('audio');
    if(pauseBtn.classList.contains('pause')){
        pauseBtn.classList.add('active');
        playBtn.classList.remove('active');
        audio.play();
    }
}

playBtn.addEventListener('click',()=>{
    playFunc();
})
pauseBtn.addEventListener('click',()=>{
    const audio = document.querySelector('audio');
    if(playBtn.classList.contains('play')){
        playBtn.classList.add('active');
        pauseBtn.classList.remove('active');
        audio.pause();
    }
})
next.addEventListener('click',()=>{
    count++;
    nowPlaying(count);
    playFunc();
})
prev.addEventListener('click',()=>{
    count--;
    nowPlaying(count);
    playFunc();
})
const playlistBtn = document.querySelectorAll('.playlistBtn');

playlistBtn.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        const playlistContent = document.querySelector('#playlistContent').src;
        console.log(playlistContent);
    })
})