function closeSideNav(){
	document.getElementById("sideNav").style.width = "0px";
	document.getElementById("sideNav").style.opacity = "0%";
}

function openSideNav(){
	document.getElementById("sideNav").style.width = "250px";
	document.getElementById("sideNav").style.opacity = "100%";
}


/*
var orders = new Array();
var qtyOfOrders = {
	1:[0, "Strawberry Banana"],
	2:[0, "Wildberry"],
	3:[0, "Peanut Butter Banana"],
	4:[0, "Mango"],
	5:[0, "Greek Salad"],
	6:[0, "Sandwhiches"],
	}

function addToCateringCart(){
	orders = ["<span id='orders-title'>Orders</span>"]
	
	var qty = document.getElementById("catering-qty").value;
	if(isNaN(qty) || qty === ""){
		return;
	}
	
	var foodID = document.getElementById("catering-dropdown").value;
	qtyOfOrders[foodID][0] = parseInt(qtyOfOrders[foodID][0]) + parseInt(qty);
	
	for(var i = 1; i < Object.keys(qtyOfOrders).length; i++){
		if(qtyOfOrders[i][0] > 0){
			var order = "<p>" + qtyOfOrders[i][0] + "x " + qtyOfOrders[i][1] + "</p>";
			orders.push(order);
		}
	}
	
	var cart = document.getElementById("catering-cart");
	var str = "";
	for(var i = 0; i < orders.length; i++){
		str += orders[i];
	}
	
	cart.innerHTML = str;
}

function resetCart(){
	for(var i = 1; i < Object.keys(qtyOfOrders).length; i++){
		qtyOfOrders[i][0] = 0
	}
	document.getElementById("catering-cart").innerHTML = "<span id='orders-title'>Orders</span>"
}
*/
