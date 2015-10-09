
/***** image treatment *****/

function hover(element,src) {
    element.setAttribute("src", src);
    element.setAttribute("cursor","pointer");
}
function unhover(element,src) {
    element.setAttribute("src", src);
    element.setAttribute("cursor","auto");
}

function dropdown(){
	var element = document.getElementById("h-nav-dropdown");
	var disp = element.style.display;
	if(disp == "none" || disp == ""){
		element.setAttribute("style","display:inline;");
		var conf = document.getElementById("h-btn-dropdown");
		conf.setAttribute("style","border-radius: 10px;" +
				"background-color: #2F2D2A;"+
				"border: 1px solid rgb(186, 186, 186);");
	}
	else{
		element.setAttribute("style","display: none;");
		var conf = document.getElementById("h-btn-dropdown");
		conf.setAttribute("style","border: none;" +
				"background-color: none;");
	}
}
