let music = window.document.querySelector('audio')

// eventos
window.document.querySelector('.button-play').addEventListener('click', playMusic);

window.document.querySelector('.button-pause').addEventListener('click', stopMusic);

music.addEventListener('timeupdate', refreshBar);


//Funções
function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display ='block';
    document.querySelector('.button-play').style.display ='none';

}

function stopMusic() {
    music.pause(); 
    document.querySelector('.button-pause').style.display ='none';
    document.querySelector('.button-play').style.display ='block';

}

function refreshBar() {
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration)*100) + '%';
    let elapsedTime = window.document.querySelector('.start');
    elapsedTime.textContent = secondsForMinutes(Math.floor(music.currentTime));
}



function secondsForMinutes(seconds) {
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if (secondsField < 10){
        secondsField = '0' + secondsField;
    }

    return minutesField + ':' + secondsField;
}
