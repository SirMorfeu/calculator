(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let audio = new Audio("click-sound.wav");

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            clickSound();
            let value = e.target.dataset.num;
            screen.value += value;
            console.log(screen.value);
        })
    });

    equal.addEventListener("click", function(e){
        clickSound();
        console.log(audio.currentTime);
        if(screen.value === ""){
            screen.value = "";
        } else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener("click", function(e){
        clickSound();
        screen.value = "";
    });

    function clickSound(){
        if (audio.onplaying) {
            audio.pause();
            audio.play();
        } else {
            audio.play();
        }

    }
})();