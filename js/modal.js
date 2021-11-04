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


var info = document.getElementById("infoViewer");
var infoView = document.getElementById("infoView");
var carrosel = document.getElementById("carrosel");
var menosInfo = document.getElementById("menosInfo");


//Ocultar botão mais informações e o carrosel e mostrar as informações e o botão menos informações
info.onclick = function () {
    infoView.style.display = "block";
    carrosel.style.display = "none";
    //menosInfo.style.display = "block";
    //info.style.display = "none";

}
// Ocultar o botão menos infortmações e a mensagem e voltar a mostrar o carrosel 
menosInfo.onclick = function () {
    carrosel.style.display = "block";
    infoView.style.display = "none";
   // menosInfo.style.display = "none";
   // info.style.display = "block";
}
