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
