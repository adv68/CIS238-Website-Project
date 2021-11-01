function closeSideNav(){
	document.getElementById("sideNav").style.width = "0px";
	//document.getElementById("mainBody").style.marginLeft = "0px";
	//document.getElementById("contentWrapper").style.marginLeft = "0px";
	document.getElementById("contentWrapper").style.transform = "translate(0px, 0px)";
	//document.getElementById("contentWrapper").style.margin = "0px";
}

function openSideNav(){
	document.getElementById("sideNav").style.width = "250px";
	//document.getElementById("mainBody").style.marginLeft = "250px";
	//document.getElementById("contentWrapper").style.marginLeft = "250px";
	document.getElementById("contentWrapper").style.transform = "translate(250px, 0px)";
	//document.getElementById("contentWrapper").style.margin = "0 0 0 250px";
}
