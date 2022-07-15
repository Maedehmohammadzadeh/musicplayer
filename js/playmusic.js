

const image=document.getElementById('image');
const player_button = document.querySelector('.player-button');
const audio = document.querySelector('audio');
const songname=document.getElementById('song-name');
const singer=document.getElementById('singer');

let playicon = `<i class="bi bi-play-circle"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16" color="red">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
  </svg></i>`;

let pauseIcon = `<i class="bi bi-pause-circle"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16" color="red">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
  </svg></i> `;
player_button.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    player_button.innerHTML = pauseIcon;
  }
  else {
    audio.pause();
    player_button.innerHTML = playicon;
  }
})

const list = document.getElementById('list');
let music_list = [
  {
    'name': "save your tear",
    'artis': "the weekend",
    'music': "The-Weeknd.mp3",
    'image': "save-your-tears.jfif",
    'like':false
  },
  {
    'name': "Blinding Lights",
    'artis': "The weekend",
    'music': "blinding_lights.mp3",
    'image': "blinding.jfif",
    'like':false
  }
];
let index=0;

const forward  = document.getElementById('forward');
forward.addEventListener('click',function(){
    index++;
    if(index== music_list.length){
      index=0;
    }
    audio.src=`./music/${music_list[index].music}`
    image.src=`./img/${music_list[index].image}`
    songname.innerText=`${music_list[index].name}`
    singer.innerText=`${music_list[index].artis}`
});

const back = document.getElementById('back');
back.addEventListener('click',function(){
  index--;
  if(index==-1){
    index=music_list.length-1;
  }
  audio.src=`./music/${music_list[index].music}`
  image.src=`./img/${music_list[index].image}`
  songname.innerText=`${music_list[index].name}`
  singer.innerText=`${music_list[index].artis}`
});
let favoritIcon_fill=`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16" color="red">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;

let favoritIcon=`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
class="bi bi-heart" viewBox="0 0 16 16" color="red">
<path
  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
</svg>`;

const favorit=document.getElementById('favriote');
favorit.addEventListener('click',function(){
      if(music_list[index].like){
         favorit.innerHTML=favoritIcon;
         music_list[index].like=false;
      }
      else{
        favorit.innerHTML=favoritIcon_fill;
        music_list[index].like=true;
      }
});
const repeat=document.getElementById('repeat');
repeat.addEventListener('click',function(){
      if(audio.loop){
        repeat.childNodes[1].style.color='red';
      }else{
        audio.loop=true;
        repeat.childNodes[1].style.color='red';
        repeat.childNodes[1].style.color='blue';

      }
});
