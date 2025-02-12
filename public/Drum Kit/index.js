$(".drum").click(function (){
        var buttonInnerHTML = this.innerHTML;
         soundPlayer (buttonInnerHTML) ;
         buttonAnimation(buttonInnerHTML);
})

document.addEventListener("keydown" , function (event) {
    
        soundPlayer(event.key);
        buttonAnimation(event.key);
    
})

function soundPlayer(key) {

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k" :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
            
        default:
            console.log("this is wrong button");
            break;
    }

    
}


function buttonAnimation(keystroke) {
    
    $("." + keystroke).addClass("pressed");
    setTimeout(remover , 100);
    function remover() {
        $("."+ keystroke).removeClass("pressed");
    }
}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


