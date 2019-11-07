const random = document.querySelector("#random-module")

const random_min = random.querySelector("#random-min")
const random_max = random.querySelector("#random-max")
const random_generate = random.querySelector("#random-generate")
const random_solution = random.querySelector("#random-solution")

function rand(min, max){
	return Math.floor( Math.random()*(max-min+1) ) + min;
}

function randGenerate(event){
	const min = parseInt(random_min.value);
	const max = parseInt(random_max.value);
	random_solution.textContent = rand(min,max);
}

// podłączyć guzik random_generate do funkcji randGenerate
random_generate.addEventListener('click', randGenerate);