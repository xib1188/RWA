
/* ** GLOBAL DATA & CONTROL STRUCTURES ** */

//ID's : associated_function
var hashtable = {
		"h-title": fHTitle,
		"hsb-coll-link": fSocialBtnCollLink,
		"hsb-coll": fSocialBtnColl
};

/* ****** LISTENERS ***** */

document.addEventListener("click",anyWhereClick);
window.addEventListener("resize",windResize);


/* ****** CALLBACKS ****** */

function anyWhereClick(event){
	var elems = document.getElementsByClassName("c-click");
	
	if(elems != null){
		for(var i = 0; i < elems.length; i++)
			hashtable[elems[i].getAttribute("id")](event,"");
	}
}

function windResize(event){
	var current = window.innerWidth;
	var elems = document.getElementsByClassName("rs");
	if(elems != null){
		for(var i = 0; i < elems.length; i++)
			hashtable[elems[i].getAttribute("id")](event,current);
	}
}

function hover(element,src) {
    element.setAttribute("src", src);
    element.setAttribute("cursor","pointer");
}
function unhover(element,src) {
    element.setAttribute("src", src);
    element.setAttribute("cursor","auto");
}

/* ****** ID-SPECIFIC FUNCTIONS ****** */
/* used to change CSS and HTML element values */ 

function fHTitle(event,value){
	//ID = h-title
	var element = document.getElementById("h-title");
	if(value < 565){
		element.innerHTML = "X.I.";
	}
	else element.innerHTML = "Xavier Ibáñez";	
}

function fSocialBtnCollLink(event,value){
	//ID = h-social-button-link
	var element = document.getElementById("hsb-coll-link");
	var parent = element.parentNode;
	var d1 = "inline"
	var d2 = "none";
	
	if(value < 690){ d1 = "none";	d2 = "inline";}
	
	for(var i = 0; i < parent.childNodes.length; i++){
		if(parent.childNodes[i].tagName == "A")
			parent.childNodes[i].style.display = d1;
	}
	element.style.display = d2;
}

function fSocialBtnColl(event,value){
	//ID h-social-button
	var element = document.getElementById("hsb-coll");
	var pparent = element.parentNode.parentNode;
	var d1 = "none";
	
	if((element == event.target) && (document.getElementById("hsb-cont-link").style.display == "none")){
		d1 = "block";
		pparent.setAttribute("style","border-radius: 10px;" +
				"background-color: #2F2D2A;"+
		"border: 1px solid rgb(186, 186, 186);");
		element.src = "images/collapse_hov.png";
		element.onmouseout = "";
	}
	else{
		pparent.setAttribute("style","border: none;");
		element.setAttribute("src","images/collapse.png");
		element.setAttribute("onmouseout","images/collapse.png");
	}
	
	for(var i = 0; i < pparent.childNodes.length; i++){
		if(pparent.childNodes[i].tagName == "A")
			pparent.childNodes[i].style.display = d1;
	}
	element.parentNode.style.display = "inline";
	console.log(element.nodeName);	
}

