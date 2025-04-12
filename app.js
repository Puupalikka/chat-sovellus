 function main() {
	let nappi = document.getElementById('rekisterointi');
	nappi.addEventListener('click', lisaa);
}

function lisaa() {
	let nimi = document.getElementById('nimi').value;
	let listanElementti = document.createElement('li')
	listanElementti.textContent = nimi;
	listanElementti.className = 'listan_osa';
	document.getElementById('lista').append(listanElementti);
}

main();
