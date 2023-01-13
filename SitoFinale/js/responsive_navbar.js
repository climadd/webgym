/* Funzione relativa alla barra di navigazione,
 ciò che fa è andare semplicemente ad aggiungere 
 e togliere all'elemento consono la "caratterstica" RESPONSIVE
*/

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "nav_bar") {
		x.className += " responsive";
	} else {
		x.className = "nav_bar";
	}
}
