	
	var div = document.getElementById('list');
	var list = [];
	var listItem;


	
	function showList(){
		div.innerHTML = list.join("");
		document.getElementById("listItem").value = "";
	}


	function clearList(){
		div.innerHTML = "";
		list = [];
	}


	function insertItem(listItem){
		var listItem = document.querySelector("#listItem").value;
		list.push("<li>"+listItem+"</li>");
		console.log(listItem);
		showList();
	}

