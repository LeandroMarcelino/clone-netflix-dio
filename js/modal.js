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
  infoView.innerHTML = "O Capitão da Casa da Maioridade, Francis Underwood, leva você a uma longa jornada enquanto ele exige sua vingança contra aqueles que ele sente que o prejudicaram – isto é, seus próprios membros do gabinete, incluindo o próprio Presidente dos Estados Unidos. Arrojado, astuto, metódico e vicioso, Frank Underwood, juntamente com sua esposa igualmente manipuladora, mas ambígua, Claire, toma Washington de assalto através da escalada da hierarquia do poder nesta recreação americanizada da série da BBC com o mesmo nome"
  carrosel.style.display = "none";
} else {
  descricao.innerHTML = "MAIS INFORMAÇÕES";
  carrosel.style.display = "block";
  infoView.style.display = "none";
}

}
  

