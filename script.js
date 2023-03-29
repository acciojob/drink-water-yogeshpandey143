//your JS code here. If required.
//your JS code here. If required.
const smallCups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

updateBigCup();

smallCups.forEach((cup, indx) => {
	cup.addEventListener("click", () => {
		// alert("clicked");
		heighLightCups(indx);
	});
});

function heighLightCups(indx){
	if(smallCups[indx].classList.contains("full") &&
	  !smallCups[indx].nextElementSibling.classList.contains("full"))
	{
		indx--;
	}

	smallCups.forEach((cup, indx2) => {
		if(indx2<=indx){
			cup.classList.add("full");
		}
		else{
			cup.classList.remove("full");
		}
	});
	updateBigCup();
}

function updateBigCup(){
	const fullCup = document.querySelectorAll('.cup-small.full').length;
	// alert(fullCup);
	const totalCup = smallCups.length;
	
	if(fullCup===0){
		percentage.style.visibility = "hidden";
		percentage.style.height = "0";
	}
	else{
		percentage.style.visibility = "visible";
		percentage.style.height = `${(fullCup/totalCup)*330}px`;
		percentage.innerText = `${(fullCup/totalCup)*100}%`;
	}

	if(totalCup === fullCup){
		remained.style.visibility = "hidden";
		remained.style.height = "0";
	}
	else{
		remained.style.visibility = "visible";
		remained.innerText = `${2-(250*fullCup)/1000}L`
	}
}