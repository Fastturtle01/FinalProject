// const response = await fetch("https://api.disneyapi.dev/character");

// http://www.geoplugin.net/json.gp?ip=171.96.190.200
async function testapi(){

	const response = await fetch("https://api.disneyapi.dev/character");
	const disney = await response.json();
	const disneydata = disney.data;

	var par = document.getElementById("p1");
	var input = document.getElementById("charaterinput").value;
	for (let i =0 ; i < 50 ;i++){
		if (disneydata[i].name == input){
			par.textContent = disneydata[i].name;
		}
	}
	// par.textContent += disney.data[0].name;


}

// Candace Adams
