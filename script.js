/*var countDownDate = new Date("Sep 28, 2023 18:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
            
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          
            
          // Output the result in an element with id="demo"
          document.getElementById("demo").innerHTML = days + " days" ;
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000); */
 
var btn = document.querySelector('.btn');

var videoContainer = document.querySelector('.video-container');

var video = document.getElementById("promo");

var closeVideo = document.querySelector('.video-container');


btn.addEventListener('click', ()=>{
videoContainer.classList.add('show');

})

closeVideo.addEventListener('click', ()=>{
videoContainer.classList.remove('show');
video.pause();
video.currentTime = 0;
video.load();

})

closeVideo.addEventListener('keydown', ()=>{
if (event.key === 'Escape') {
videoContainer.classList.remove('show');
video.pause();
video.currentTime = 0;
video.load();  
}
})