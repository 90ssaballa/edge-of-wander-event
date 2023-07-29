var countDownDate = new Date("Sept 28, 2023 18:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
            
  var distance = countDownDate - now;
            
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            
              
  document.getElementById("countdown").innerHTML = "W e l c o m e  ! " + " " + days  + " days " + " until  Edge of Wander" ;
  document.getElementById("ticket").innerHTML = "Get your Tickets now!" ;
 
  if (distance < 0) {
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "Thank you to everyone who attended this event !";
  document.getElementById("ticket").innerHTML = "" ;

   }
 }, 1000); 



var modal = document.getElementById("video-modal");

var btn = document.getElementById("btn");

var span = document.getElementsByClassName("close")[0];

var video = document.getElementById("promo");

function stopVideo(){
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.load();  
}

btn.addEventListener("click", function(){
  modal.style.display = "block";
})

span.addEventListener("click", function(){
  stopVideo();
})

window.addEventListener("click", function(event){
if(event.target === modal){
    stopVideo();
  }
})

window.addEventListener("keydown", function(event){
 if(event.keyCode === 27){
  stopVideo();

  }
})
