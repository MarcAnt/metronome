
/**
 * 


    Created by @bymarcant 2020.


 */
document.addEventListener('DOMContentLoaded', function(){

const playBtn = document.getElementById('play'); 
const plusBtn = document.getElementById('plus'); 
const lessBtn = document.getElementById('less'); 
const container = document.querySelector('.container'); 
let bpmText = document.getElementById('bpm'); 
const beat = document.getElementById('beat'); 
const boxes = document.querySelectorAll('.box'); 


let bpm = 60; 
let bpmCounter = 1000; 

let initPulse = null;
let interval = null; 
let setPlay = false; 
let played = false; 

let counter = 1; 
let initAnimation = null; 


function playPulse() {
    
    beat.currentTime = 0; 
    beat.play(); 

}

function stopPulse() {
    
    clearInterval(initPulse); 
}



function playMetronome() {

    if (!setPlay) {
        
        played = true;

        play.children[0].setAttribute('name', 'play'); 
        interval = parseInt(bpmCounter); 
        initPulse = setInterval(playPulse, interval);
        setPlay = true; 
        initAnimation = setInterval(boxAnimate, interval);
    }else {
        played =  false; 
        play.children[0].setAttribute('name', 'pause'); 
        stopPulse(); 
        stopAnimation(); 
        setPlay = false; 


    }

 
}

//Animando las cajas 
function stopAnimation() {
    clearInterval(initAnimation); 
}
 

function boxAnimate() {
    counter++; 

    boxes.forEach(box => {
        
        box.classList.remove('active')
    });
    
    if (boxes[counter - 1].className != 'active') {
        
        boxes[counter - 1].classList.add('active')
    }
   
    if (counter >= 4) {
        counter = 0
    }
    
}


function addBpm() {

    if(bpm >= 300) {
        return; 
    }else {
        bpm++; 

        bpmCounter = Math.round(60000/bpm);

        if (played) {
            
            setPlay = true; 
            play.children[0].setAttribute('name', 'play'); 
            stopPulse(); 
            interval = parseInt(bpmCounter); 
            initPulse = setInterval(playPulse, interval);
            initAnimation = setInterval(boxAnimate, interval);
        }

    }

    bpmText.textContent = bpm;
}

function sustBpm() {

    
    if(bpm <= 40) {
        return; 
    }else {
        bpm--; 
        bpmCounter = Math.round(60000/bpm);
        if (played) {
            
            setPlay = true; 
            play.children[0].setAttribute('name', 'play'); 
            stopPulse(); 
            interval = parseInt(bpmCounter); 
            initPulse = setInterval(playPulse, interval);
            initAnimation = setInterval(boxAnimate, interval);
        }
    }

    bpmText.textContent = bpm; 

}

plusBtn.addEventListener('click', addBpm);
lessBtn.addEventListener('click', sustBpm);


document.addEventListener('keydown', function (e) {

    e.preventDefault(); 

    if (e.key == ' ' || e.key == 'Enter') {
        
       playMetronome(); 
    }

    if (e.key == '+' || e.key == 'ArrowUp' || e.key == 'ArrowRight') {
        
        addBpm();  
    }

    if (e.key == '-' || e.key == 'ArrowDown' || e.key == 'ArrowLeft') {
        
        sustBpm();  
    }
   
    
}); 

playBtn.addEventListener('click',  function() { playMetronome() } ); 





// function addCountBpm(bpm) {

//     if(bpm >= 250) {
//         return; 
//     }else {
        
//         bpmCounter = Math.round(60000/bpm);
   
//     }

 
//     // if(setPlay){
//         keyCounter++;
//         setPlay = true; 
//         play.children[0].setAttribute('name', 'play'); 
//         stopPulse(); 
//         stopAnimation();
//         interval = parseInt(bpmCounter); 
//         initPulse = setInterval(playPulse, interval);

//         initAnimation = setInterval(boxAnimate, interval);
//     // }
     
// }

// function sustCountBpm(bpm) {

//     if(bpm <= 40) {
//         return; 
//     }else {
    
//         bpmCounter = Math.round(60000/bpm);

//     }

//     if(setPlay){

//         play.children[0].setAttribute('name', 'play'); 
//         stopPulse(); 
//         stopAnimation();
//         interval = parseInt(bpmCounter); 
//         initPulse = setInterval(playPulse, interval);
//         initAnimation = setInterval(boxAnimate, interval);
//     }

// }

// function addBpm() {

//     if(bpm >= 300) {
//         return; 
//     }else {
//         bpm++; 
//         addCountBpm(bpm)
        
//     }

//     bpmText.textContent = bpm;
    
// }

// function sustBpm() {

    
//     if(bpm <= 40) {
//         return; 
//     }else {
//         bpm--; 
//         sustCountBpm(bpm)
//     }

//     bpmText.textContent = bpm; 

// }

// function pulse() {

//     setPlay = true; 
//     beat.currentTime = 0; 
//     beat.play(); 

// }

// function playPulse(){
//     pulse(); 
// }

// function stopPulse() {
//     clearInterval(initPulse); 
// }
 

// //Animando las cajas 
// function stopAnimation() {
//     clearInterval(initAnimation); 
// }
 

// function boxAnimate() {
//     counter++; 

//     boxes.forEach(box => {
        
//         box.classList.remove('active')
//     });
    
//     if (boxes[counter - 1].className != 'active') {
        
//         boxes[counter - 1].classList.add('active')
//     }
   
//     if (counter >= 4) {
//         counter = 0
//     }
    
// }


// let clickCounter = 0; 

// function playMetronome() {

//     clickCounter++; 
//     interval = parseInt(bpmCounter); 

//     if (clickCounter % 2 == 1) {
        
//         initPulse = setInterval(playPulse, interval);
//         initAnimation = setInterval(boxAnimate, interval);
//         // play.children.setAttribute('name', 'play'); 
//         play.children[0].setAttribute('name', 'play'); 
        
//     }else {
//         play.children[0].setAttribute('name', 'pause'); 
//         stopPulse(); 
//         stopAnimation(); 
//     }

    
 
// }


// plusBtn.addEventListener('click', addBpm); 
// lessBtn.addEventListener('click', sustBpm); 
// playBtn.addEventListener('click', playMetronome); 

// function keyPressed(e) {
    
//     keyCounter++; 

//     if(e.key == 'Enter' || e.key == ' ' ) {
//         // console.log(keyCounter % 2 == 1);

//         if (keyCounter % 2 == 1 ) {
            
//             // playMetronome(); 
//             play.children[0].setAttribute('name', 'play'); 
//             interval = parseInt(bpmCounter); 
//             initPulse = setInterval(playPulse, interval);
//             initAnimation = setInterval(boxAnimate, interval);
            
//         } else {
//             play.children[0].setAttribute('name', 'pause'); 
//             stopPulse(); 
//             stopAnimation();
//         }

//     }
    
//     if (e.key == '+' || e.key == 'ArrowUp' || e.key == 'ArrowRight') {
        
//         addBpm();  
//     }

//     if (e.key == '-' || e.key == 'ArrowDown' || e.key == 'ArrowLeft') {
        
//         sustBpm();  
//     }
// }


// document.addEventListener('keydown', keyPressed); 







});
