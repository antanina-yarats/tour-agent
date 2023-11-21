gsap.to('.header', {
    opacity: 1,
    duration: 2,
    delay: 1
})


const btn = document.querySelector('.btn');
const result = document.querySelector('#result');


btn.addEventListener('click', submit);

function submit(e) {
    e.preventDefault();

    let points = 0;


    if(document.querySelector('#answerOne').checked){
        points++;
    }

    if(document.querySelector('#answerTwo').checked){
        points++;
    }

    if(document.querySelector('#answerThree').checked){
        points++;
    }

    if(document.querySelector('#answerFour').checked){
        points++;
    }

    result.textContent = "Your points are " + points;

    if(points === 4){
        Swal.fire({
            title: 'Brilliant!',
            text: 'You win! Congratulations! ',
            imageUrl: 'https://images.unsplash.com/photo-1600370907499-af0acd0df40e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGdsaXR0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageWidth: 600,
            imageHeight: 300,
            imageAlt: 'Custom image',
            confirmButtonText: 'Press here to collect your prize.'
          }).then(function(){
            window.location = "/final/final.html";
          })
    }

    else{
        Swal.fire({
            title: 'Oops!',
            text: 'No win this time .. Thanks for the game!',
            imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText: 'More information about our destinations'
          }).then(function(){
            window.location = "/islandsTwo/islandsTwo.html";
          })
         
    }
}

// timer


const start = document.querySelector('#start');
const form = document.querySelector('form');
start.addEventListener('click', function(){
    start.style.display = "block";
    countdown.style.display = "block";
    form.style.display = "block";
})

const timer = 4;
let timeAmount = timer * 60; //240

function calculateTime(){
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(timeAmount/60);
    let seconds = timeAmount%60;
    
    minutes = "0" + minutes;

    if(seconds<10){
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes}:${seconds}`;
    timeAmount--;

    if(timeAmount<0){
        stopTimer();
        timeAmount = 0;
        Swal.fire({
            title: 'Oops!',
            text: 'Your time is out .. Thanks for the game!',
            imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText: 'More information about our destinations'
          }).then(function(){
            window.location = "/islandsTwo/islandsTwo.html";
          })
    }
}

const timerId = setInterval(calculateTime, 1000);

function stopTimer(){
    clearInterval(timerId);
}


























