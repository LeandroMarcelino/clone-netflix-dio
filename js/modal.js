var vid = document.getElementById("myVideo"); 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  vid.play(); 
}
span.onclick = function() {
  modal.style.display = "none";
  vid.pause();
}            
window.onclick = function(event) {
  if (event.target == modal) 
  {                
    modal.style.display = "none";
    vid.pause();
  }
}
