/*COUNTDOWN TIMER*/
let countDownDate = new Date("Sept 28, 2023 18:00").getTime();

let countdownText = setInterval(function() {

let now = new Date().getTime();
            
let distance = countDownDate - now;
            
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            
              
  document.getElementById("countdownTimer").innerHTML = "Welcome ! " + " " + days  + " days " + " until  Edge of Wander" ;
  document.getElementById("buy-ticket").innerHTML = "Early bird tickets on sale now thru Sept 1!" ;
 
  if (distance < 0) {
  clearInterval(countdownText);
  document.getElementById("countdownTimer").innerHTML = "Thank you to everyone who attended this event !";
  document.getElementById("buy-ticket").innerHTML = "" ;

   }
 }, 1000); 


/*VIDEO TRAILER*/

let modal = document.getElementById("video-modal");

let btn = document.getElementById("trailer-btn");

let span = document.getElementsByClassName("close-trailer")[0];

let video = document.getElementById("trailer");

function stopVideo(){
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.load();  
}

btn.addEventListener("click", function(){
  console.log("click");
  modal.style.display = "block";
})

span.addEventListener("click", function(){
  console.log("close");
  stopVideo();
})

window.addEventListener("click", function(event){
if(event.target === modal){
  console.log("close");
    stopVideo();
  }
})

window.addEventListener("keydown", function(event){
 if(event.keyCode === 27){
  console.log("close");
  stopVideo();

  }
})

/*YOUTUBE*/

let youtubeModal = document.getElementById("youtube-modal");

let youtubeBtn = document.getElementById("yt-btn");

let close = document.getElementsByClassName("close-youtube")[0];

let youtube = document.querySelector("youtube");

function stopYoutube(){
  youtubeModal.style.display = "none";
  // youtube.pause(); need to research more about how to stop embedded youtube videos
  // youtube.currentTime = 0;
  // youtube.load();  
}

youtubeBtn.addEventListener("click", function(){
  console.log("click");
  youtubeModal.style.display = "block";
})

close.addEventListener("click", function(){
  console.log("close");
  stopYoutube();
})

window.addEventListener("click", function(event){
if(event.target === youtubeModal){
  console.log("close");
    stopYoutube();
  }
})

window.addEventListener("keydown", function(event){
 if(event.keyCode === 27){
  console.log("close");
  stopYoutube();

  }
})
