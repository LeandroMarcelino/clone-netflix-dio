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




// Formatando informações 

        
var descricao = document.getElementById("infoViewer");
var infoView = document.getElementById("infoView");
var carrosel = document.getElementById("carrosel");

descricao.onclick = function () {
if (descricao.innerHTML === "MAIS INFORMAÇÕES") {
  descricao.innerHTML = "MENOS INFORMAÇÕES!";
  infoView.style.display = "block";
  carrosel.style.display = "none";
} else {
  descricao.innerHTML = "MAIS INFORMAÇÕES";
  carrosel.style.display = "block";
  infoView.style.display = "none";
}

}
  

