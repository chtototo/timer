function clearValue(id) {
    document.getElementById(id).value='';
}

function timer() {
    document.getElementById('setTime').innerHTML=`<button id="setTimeBtn" class="setTime" onclick="timer() disabled">SET</button>`;
    const timer = document.getElementById('timer')
    let sec = Number(document.getElementById('minutes').value) * 60 + Number(document.getElementById('seconds').value);
    document.getElementById('minutes').value='00'
    document.getElementById('seconds').value='00'
    let i = sec+1;
    setInterval(() => {
        i--
        let value = i * 100 / sec;
        timer.style = '--value:'+ value
        if(i <= 0) {
            i = 0;
            document.getElementById('aud').innerHTML=`<audio id="audio" src="tic_tac_reveil.mp3" autoplay></audio>`;
            setTimeout(() => {location.reload();}, 1150);
            
        }
        if (i == 5) {
            document.getElementById('aud').innerHTML=`<audio src="tic_tac_reveil.wav" autoplay></audio>`;
        }
        timer.innerText = Math.floor(i / 60) + ':' + timeStyle(i % 60);
        let title = document.getElementById('title');
        title.innerHTML =  `${Math.floor(i / 60) + ':' + timeStyle(i % 60)}`;
    }, 1000)
}

function timeStyle(time) {
    if(Math.floor(time / 10) == 0) {
        return '0' + time;
    }else{
        return time;
    }
}

function enter() {
    var input = document.querySelector('input[id="seconds"]');
    var input2 = document.querySelector('input[id="minutes"]');
    input.addEventListener('keypress', function(e){
      if(e.which === 13){
      	e.preventDefault();
            timer();
            document.getElementById('inp').innerHTML=`
            <input id="minutes" type="text" onclick="" placeholder="00">
            <p class="toch">:</p>
            <input id="seconds" type="text" onclick="" placeholder="00">`
      }
    });
    input2.addEventListener('keypress', function(e){
      if(e.which === 13){
      	e.preventDefault();
            timer();
            document.getElementById('inp').innerHTML=`
            <input id="minutes" type="text" onclick="" placeholder="00">
            <p class="toch">:</p>
            <input id="seconds" type="text" onclick="" placeholder="00">`
      }
    });
}