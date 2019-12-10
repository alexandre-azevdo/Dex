function closeDetail() {
	document.getElementById("detail").style.display = "none";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showDetail(data) {

	document.getElementById("type1").innerText = data.type1;
	document.getElementById("type2").innerText = data.type2 == null ? "" : data.type2;
	document.getElementById("detail-name").innerText = data.name;
	document.getElementById("detail-image").src = data.imageUrl;
	document.getElementById("detail").style.display = "block";
}

function createDexBlock(data) {

	let image = document.createElement("img");
	image.className = "dex-image";
	image.src = data.imageUrl;
	let nameContainer = document.createElement("p");
	let node = document.createTextNode(data.name);
	nameContainer.appendChild(node);

	let subtitleContainer = document.createElement("div");
	subtitleContainer.className = "dex-subtitle";
	subtitleContainer.appendChild(nameContainer);

	let block = document.createElement("div");
	block.addEventListener('click', function (event) {
       	getDetailResponse(data.index).then(data => { showDetail(data); });
    });
	block.className = "dex-block";
	block.appendChild(image);
	block.appendChild(subtitleContainer);

	return block;
}

async function getDetailResponse(index) {
	
	let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + index);
	let data = await response.json();
	objects =  {
    			index: index,
    			name: capitalizeFirstLetter(data["name"]),
    			type1: data["types"].length > 1 ? data["types"][1]["type"]["name"] : data["types"][0]["type"]["name"],
    			type2: data["types"].length > 1 ? data["types"][0]["type"]["name"] : null,
        		imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + index.toString() + ".png"
        	};

	return objects;
}

async function getResponse() {

	let response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=151');
	let data = await response.json();
        	
    objects = [];

    for (var i = 0; i < data["results"].length; i++) {
    	objects.push({
			index: i + 1,
    		name: capitalizeFirstLetter(data["results"][i]["name"]),
        	imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + (i+1).toString() + ".png"
        });
        }

    return(objects);
}