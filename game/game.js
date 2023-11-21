gsap.to('.wrapper', {rotation: 360, duration: 2, opacity: 1, delay: 1})


const input = document.querySelector('#guess');
const btn  = document.querySelector('.btn');
const computer = Math.floor(Math.random()*10)+1;


btn.addEventListener('.btn', function(e){
  if(e.keyCode === 13){
    play();
  }
})

btn.addEventListener('click', play);

function play() {
   const player = document.querySelector('#guess').value;


   if(player<1 || player>10){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Type a number between 1 and 10',
        
      })
   }

   else if(player<computer){
    Swal.fire({
        title: 'Oops!',
        text: 'No win this time .. Thanks for the game!',
        imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText: 'I want another chance.'
      }).then(function() {
        window.location = "/gameTwo/gameTwo.html";
    });
     
      const wrapper = document.querySelector('.wrapper');
      wrapper.style.display = "none";
      
   }

   else if(player>computer){
    Swal.fire({
        title: 'Oops!',
        text: 'Thanks for the game! You will get fortunate next time',
        imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText: 'I want another chance.'
      }).then(function(){
        window.location = "/gameTwo/gameTwo.html";
      })

      const wrapper = document.querySelector('.wrapper');
      wrapper.style.display = "none";
   }

   else if(isNaN(player)){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Type a number!',
        
      })

   }

   else{
    Swal.fire({
        title: 'Brilliant!',
        text: 'You win! Congratulations! ',
        imageUrl: 'https://images.unsplash.com/photo-1600370907499-af0acd0df40e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGdsaXR0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: 'Custom image',
        confirmButtonText: 'Press here to collect your prize '
      }).then(function(){
        window.location = "/final/final.html";
      })
    }
}
