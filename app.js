
async function getScore(){
	var input = document.getElementById("chat-input").value;
	var city = getFormat(input);

	const api1 = "https://api.teleport.org/api/urban_areas/slug:";
	const api2 = "/scores/";
	const api3 = "/images/";
	const response = await fetch(api1+city+api2);
	const image = await fetch(api1+city+api3);
	const gaugeElement = document.querySelector(".gauge");
	const gaugeElementAvg = document.querySelector(".gaugeAvg");
	const data = await response.json();
	const para = document.createElement("p");
	var score = Math.round(data.teleport_city_score);
	var images = await image.json();
	var categories = data.categories;

	input = getFormat(input);
	document.getElementById("imgsrc").src = images.photos[0].image.mobile;
	setGaugeValue(gaugeElement,gaugeElementAvg,score/100,categories[1].score_out_of_10,categories[7].score_out_of_10,categories[8].score_out_of_10,categories[9].score_out_of_10,categories[10].score_out_of_10,categories);
	document.querySelector(".summary").innerHTML = data.summary;
	console.log(data.summary)
	// console.log(images);
}


function setGaugeValue(gauge,gaugeAvg, value,value1,value2,value3,value4,category) {

  gaugeAvg.querySelector(".gauge__fill").style.transform = `rotate(${value/2}turn)`;
  gauge.querySelector(".gauge__fill1").style.transform = `rotate(${value1/20}turn)`;
  gauge.querySelector(".gauge__fill2").style.transform = `rotate(${value2/20}turn)`;
  gauge.querySelector(".gauge__fill3").style.transform = `rotate(${value3/20}turn)`;
  gauge.querySelector(".gauge__fill4").style.transform = `rotate(${value4/20}turn)`;
  gaugeAvg.querySelector(".gauge__cover").textContent = `${Math.round(value*100)}`;
  gauge.querySelector(".gauge__cover1").textContent = `${Math.round(value1)}`;
  gauge.querySelector(".gauge__cover2").textContent = `${Math.round(value2)}`;
  gauge.querySelector(".gauge__cover3").textContent = `${Math.round(value3)}`;
  gauge.querySelector(".gauge__cover4").textContent = `${Math.round(value4)}`;
}

function getFormat(str){
	str = str.toLowerCase();
	str = str.replaceAll(" ","-")
	return str;
}
