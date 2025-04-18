function main() {
	const nappi = document.getElementById('rekisterointi');
	if (nappi) {
		nappi.addEventListener('click', buttonGetter);
	}
}

function canvas() {
	const header = document.createElement('header');
	const canvas = document.createElement('canvas');
	
	header.id = 'otsikkopala';
	canvas.id = 'canvas';
	
	document.body.appendChild(header);
	document.body.appendChild(canvas);
	
	const context = canvas.getContext('2d');
	
	gameLoop();
}

function gameLoop() {
	x += 1;
	isRunning = render();
	
	if (isRunning){
		requestAnimationFrame(gameLoop);
	}
}

function render() {
	const canvas = document.getElementById('canvas');
	const rectWidth = 100
	
	if (!canvas) {
		return 0;
	}
	
	if (x + rectWidth == canvas.width){
		return 0;
	}
	
	context = canvas.getContext('2d')
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = 'rgb(0, 0, 0)';
	context.fillRect(x, 0, rectWidth, rectWidth);
	
	return 1;
}

function buttonGetter() {
	poistonappiCreation();
	pelinappiCreation();
}

function pelinappiCreation() {
	const pelinappi = document.createElement('button');
	pelinappi.textContent = 'Pelaa!'
	pelinappi.className = 'nappi';
	document.body.appendChild(pelinappi);
	pelinappi.addEventListener('click', () => {

	while (document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}

	canvas();
	});
}

function poistonappiCreation() {
	const poistonappi = document.getElementById('poistonappi');
	poistonappi.addEventListener('click', () => {
		document.body.removeChild(document.querySelectorAll('.nappi')[0]);
		
		const kuva = document.createElement('img');
		kuva.src = 'https://cdn.pixabay.com/photo/2012/04/16/13/57/trash-36103_1280.png';
		kuva.alt = 'kuva';
		kuva.id = 'kuva';
		document.body.appendChild(kuva);
	});
}

let x = 0;
main();
