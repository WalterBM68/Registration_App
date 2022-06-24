const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const showReg = document.querySelector('.showReg');
const towns = document.querySelectorAll(".towns");

let townValues = []
for(let i = 0; i < towns.length; i++){
	townValues.push(towns[i].value)
	console.log(towns[i].value)
}

let registrationNumbers = localStorage.getItem("regNumbers") ? JSON.parse(localStorage.getItem("regNumbers")) : localStorage.setItem('regNumbers', JSON.stringify([]));

function addingRegNumbers(regNumber){
    let firstChild = regNumbers.firstChild;
	const newRegNumber = document.createElement('div');
	newRegNumber.innerHTML = regNumber;    
	newRegNumber.classList.add('regNumber');
	regNumbers.appendChild(newRegNumber);
    regNumbers.insertBefore(newRegNumber, firstChild);
}

let theRegNumbers = TheRegNumbers();

const regNumberAdd = () => {
	let regNumber = regNumberEntered.value

	if (!regNumber) {
		message.innerHTML = "Please enter a registration number";
		return;
	}
	
    theRegNumbers.setRegNumber(regNumber);
	registrationNumbers.push(theRegNumbers.getRegNumber())

	theRegNumbers.setTownValue(towns);
	addingRegNumbers(regNumber);

	localStorage.setItem('regNumbers', JSON.stringify(registrationNumbers))
	
	regNumberEntered.value = '';
}
const radioBtns = () => {
	console.log(towns[i].value)
}


// townValues.addEventListener("click", radioBtns);
showReg.addEventListener("click", regNumberAdd);













































// let storeRegNumbers = JSON.parse(localStorage.getItem('regNumbers'));
// let regNumberList = [];

// if(storeRegNumbers){
// 	regNumberList = storeRegNumbers;
// }







// for(var i = 0; i < regNumberList.length; i++){
//    let currentRegNumber = regNumberList[i];
//    addRegNumbers(currentRegNumber);
// }



// if(regNumberList.includes(regNumberEntered.value)){
    //    message.innerHTML = 'Reg number already entered';
	//    regNumberEntered.value = '';
	//    return;
	// }

// regNumberList.push(regNumberEntered.value);

// localStorage.setItem('regNumbers', JSON.stringify(regNumberList));