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


const silnia = document.querySelector("#silnia-module")

const silnia_input = silnia.querySelector("#silnia-input")
const silnia_solution = silnia.querySelector("#silnia-solution")
const silnia_calculate = silnia.querySelector("#silnia-calculate")

function sil(n){
	if(n <= 0) return 1;
	return n * sil(n-1);
}

function silniaCalculate() {
	const n = parseInt(silnia_input.value);
	silnia_solution.textContent = sil( n );
}

silnia_calculate.addEventListener('click',silniaCalculate);
silnia_input.addEventListener('change',silniaCalculate);