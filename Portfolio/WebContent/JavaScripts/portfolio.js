
/* ** GLOBAL DATA & CONTROL STRUCTURES ** */

//ID's : associated_function
var hashtable = {
		"h-title": fHTitle,
		"hsb-coll-link": fSocialBtnCollLink,
		"hsb-coll": fSocialBtnColl,
		"m-menu": f690mainMenuFormat,
		"lm-img": fLeftMenu
};

var activeArticle = 0;
var leftMenu = false;
/* ****** LISTENERS ***** */

document.addEventListener("click",anyWhereClick);
window.addEventListener("resize",windResize);


/* ****** CALLBACKS ****** */
/* this functions are associated to a CSS class */

function anyWhereClick(event){
	//class associated: c-click
	var elems = document.getElementsByClassName("c-click");
	if(elems != null){
		for(var i = 0; i < elems.length; i++)
			hashtable[elems[i].getAttribute("id")](event,window.innerWidth);
	}
}

function windResize(event){
	//class associated: rs
	var current = window.innerWidth;
	var elems = document.getElementsByClassName("rs");
	if(elems != null){
		for(var i = 0; i < elems.length; i++)
			hashtable[elems[i].getAttribute("id")](event,current);
	}
}


function chg(element,attr,value) {
	element.setAttribute(attr, value);
}

function dMenuOver(elem){
	chg(elem.children[0],"style","opacity:0.8");
	chg(elem.children[2],"style","opacity:1");
}

function dMenuOut(elem){
	chg(elem.children[0],"style","opacity:0");
	chg(elem.children[2],"style","opacity:0");
}

function reload(){
	location.reload(true);
}
/* ****** ID-SPECIFIC FUNCTIONS ****** */
/* used to change CSS and HTML element values */ 

function fHTitle(event,value){
	/* this function change the header's title when windowsize < 565px */
	//ID = h-title
	var element = document.getElementById("h-title");
	if(value <= 720){
		if(value < 380)element.innerHTML = "";
		else element.innerHTML = "X.I";
	}
	else element.innerHTML = "Xavier Ibáñez";	
}

function fSocialBtnCollLink(event,value){
	/*this function collapse or uncollapse the header social buttons when 
	 * windowsize changes*/
	//ID = h-social-button-link
	
	var element = document.getElementById("hsb-coll-link");
	var parent = element.parentNode;
	var d1 = "inline"
	var d2 = "none";
	
	if(value <= 960){
		d1 = "none";
		d2 = "inline";
		parent.style.border = "none";
		element.firstElementChild.setAttribute("src","images/collapse.png");
		element.firstElementChild.setAttribute("onmouseout","chg(this,'src','images/collapse.png')");
	}
	
	for(var i = 0; i < parent.childNodes.length; i++){
		if(parent.childNodes[i].tagName == "A")
			parent.childNodes[i].style.display = d1;
	}
	element.style.display = d2;
}

function fSocialBtnColl(event,value){
	/*this function controles the dropdown function of the social collapsed buttons*/
	//ID h-social-button
	var element = document.getElementById("hsb-coll");
	var pparent = element.parentNode.parentNode;
	var d1 = "none";
	if(value <= 960){
		if(element == event.target && document.getElementById("hsb-cont-link").style.display == "none"){
			d1 = "block";
			pparent.setAttribute("style","border-radius: 10px;" +
					"background-color: #2F2D2A;"+
			"border: 1px solid rgb(186, 186, 186);");
			element.src = "images/collapse_hov.png";
		}
		else{
			pparent.style.border = "none";
			element.src = "images/collapse.png";
		}
		
		for(var i = 0; i < pparent.childNodes.length; i++){
			if(pparent.childNodes[i].tagName == "A")
				pparent.childNodes[i].style.display = d1;
		}
		element.parentNode.style.display = "inline";
	}
}

function f690mainMenuFormat(event,value){
	var element = document.getElementById("m-menu");
	if(value <= 690){
		for(var i = 0; i < element.children.length; i++){
			element.children[i].setAttribute("onmouseover","chg(this.children[2],'style','opacity:1')");
			element.children[i].setAttribute("onmouseout","chg(this.children[2],'style','opacity:0')");
			element.children[i].children[0].style.opacity = 1;
		}
	}
	else{
		for(var i = 0; i < element.children.length; i++){
			element.children[i].setAttribute("onmouseover","dMenuOver(this)");
			element.children[i].setAttribute("onmouseout","dMenuOut(this)");
			element.children[i].children[0].style.opacity = 0;
		}
	}
}

function fLeftMenu(event,value){
	var disp;
	var rot;
	var ok = false;
	if((ok = (event == null && value <= 690))){
		disp = "none";
		rot = "rotate(0deg)";
	}
	else if(event.target != document.getElementById("lm-img")){
		if((ok = (value <= 690 && leftMenu))){
			disp = "none";
			rot = "rotate(0deg)";
		}
		else if((ok = (value >690 && !leftMenu))){
			disp = "block";
			rot = "rotate(180deg)";
		}
	}
	if(ok){
		for(var i = 1; i <= 6; i++){
			document.getElementById("a"+i).style.display=disp;
		}
		document.getElementById("lm-img").style.msTransform = rot;
		document.getElementById("lm-img").style.webkitTransform = rot;
		document.getElementById("lm-img").style.transform = rot;
		leftMenu = !leftMenu;
	}
}

function openArticle(elem,artic){
	var parent = elem.parentNode;
	var pparent = parent.parentNode;

	activeArt(artic.slice(2,3));
	
	pparent.style.display = "none";
	document.getElementById("s-menu").style.display = "block";
	
}

function activeArt(currentArt){
	var newElem = document.getElementById("a"+currentArt);
 	if(activeArticle != 0){
 		var activeElem = document.getElementById("a"+activeArticle);
		document.getElementById("ar"+activeArticle).style.display = "none";
		activeElem.style.backgroundColor ="#2F2D2A";
		activeElem.setAttribute("onmouseout","chg(this,'style','background-color:#2F2D2A')");
		activeElem.style.cursor = "pointer";
	}
	document.getElementById("ar"+currentArt).style.display = "block";
	newElem.style.backgroundColor ="#bababa";
	newElem.setAttribute("onmouseout","");
	newElem.style.cursor = "default";
	
	activeArticle = currentArt;
}

function leftMenuDropDown(){
	var disp = "none";
	var rot = "rotate(0deg)";
	if(!leftMenu){
		disp = "block";
		rot = "rotate(180deg)";
	}
	for(var i = 1; i <= 6; i++){
		document.getElementById("a"+i).style.display=disp;
	}
	document.getElementById("lm-img").style.msTransform = rot;
	document.getElementById("lm-img").style.webkitTransform = rot;
	document.getElementById("lm-img").style.transform = rot;
	
	leftMenu = !leftMenu;
}