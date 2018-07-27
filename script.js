let cars= [
{
	name:"Corolla",
	companyname: "Toyota",
	model:"2018",
	imgURL:"corolla.jpg",
	carRate:"PKR 19.4 - 28.0 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Toyota_Corolla",
	carSite: "https://www.pakwheels.com/new-cars/search/make_toyota/model_corolla/price_any_any/"

},
{ 
	name:"Civic",
	companyname: "Honda",
	model:"2018",
	imgURL:"honda-civic.jpg",
	carRate:"PKR 26.0 - 27.5 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Honda_Civic",
	carSite: "https://www.pakwheels.com/new-cars/search/make_honda/model_civic/price_any_any/"
	
},
{
	name:"Tucson",
	companyname: "Hyundai",
	model:"2018",
	imgURL:"hyundai-tucson.jpg",
	carRate:"PKR 28.0 - 35.5 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Hyundai_Tucson",
	carSite: "https://www.pakwheels.com/new-cars/search/make_hyundai/model_tucson/price_any_any/"

},
{
	name:"Jimny",
	companyname: "Suzuki",
	model:"2018",
	imgURL:"jimmny.jpg",
	carRate:"PKR 22.9 - 22.9 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Suzuki_Jimny",
	carSite:"https://www.pakwheels.com/new-cars/search/make_suzuki/model_jimny/price_any_any/"

},
{
	name:"AMG C-Class Coupe",
	companyname: "Mercedes",
	model:"2018",
	imgURL:"mercedes-amg.png",
	carRate:"PKR 68.0 - 83.0 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Mercedes-AMG",
	carSite:"https://www.pakwheels.com/new-cars/search/make_mercedes-benz/model_c-class/price_any_any/"

},
{
	name:"Juke",
	companyname: "Nissan",
	model:"2017",
	imgURL:"nisan-juke.png",
	carRate:"PKR 19.0 - 25.5 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Nissan_Juke",
	carSite:"https://www.pakwheels.com/new-cars/search/make_nissan/model_juke/price_any_any/"
	

},
{
	name:"DN F-SEDAN",
	companyname: "Daihatsu",
	model:"2017",
	imgURL:"sedan-dihatsu.jpg",
	carRate:"PKR 30.0 - 37.5 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Daihatsu",
	carSite:"https://www.pakwheels.com/used-cars/search/-/mk_hyundai/md_accent/"

},
{
	name:"Fortuner",
	companyname: "Toyota",
	model:"2018",
	imgURL:"fortuner-toyota.jpg",
	carRate:"PKR 61.0 - 64.5 lacs",
	readMoreUrl:"https://en.wikipedia.org/wiki/Toyota_Fortuner",
	carSite:"https://www.pakwheels.com/new-cars/search/make_toyota/model_fortuner/price_any_any/"

},];

function initializing(){
	carsGroupEl=document.querySelector("#cars-list");
	for (let i = 0; i < cars.length; i++) {
		carsGroupEl.innerHTML+= `<div class="car-image-div" 
		style="background-image: url('images/${cars[i].imgURL}')" onclick="changeCar(${i})">
		<p class="cars-img-text">${cars[i].name}</P>
		</div>
		
		` 

	}
	changeCar(0)
}
function changeCar(abcd){
	//console.log(cars[abcd].name);
	document.querySelector("#car-name").innerHTML= cars[abcd].name;
	document.querySelector("#car-company").innerHTML= cars[abcd].companyname;
	//document.querySelector("#car-img").innerHTML = cars[abcd].imgURL;
	document.querySelector(".car-image").style.background =`url(images/${cars[abcd].imgURL})`;
	document.querySelector("#car-price").innerHTML= cars[abcd].carRate;
	document.querySelector("#car-model").innerHTML = cars[abcd].model;
	document.querySelector("#cars-bottom-links a").href= cars[abcd].readMoreUrl;
	document.querySelector("#car-website a").href= cars[abcd].carSite;
	
}