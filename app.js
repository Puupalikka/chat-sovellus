function main() {
	if (!(localStorage.getItem('nimi'))) {
		let nappi = document.getElementById('rekisterointi');
		nappi.addEventListener('click', function() {toinen_sivu(document.getElementById('nimi').value)});
	}else{
		toinen_sivu(localStorage.getItem('nimi'));
	}
}

function toinen_sivu(nimi) {
	while (document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}
	
	const hedari = document.createElement('header');
	const tervehdys = document.createElement('p');
	tervehdys.id = 'tekstikappale';
	const poistonappi = document.createElement('button');
	
	poistonappi.textContent = 'Poista data';
	poistonappi.id = 'nappi';
	poistonappi.addEventListener('click', poista);
	
	tervehdys.textContent = 'Tervetuloa ' + nimi + '!';
	
	document.body.appendChild(hedari);
	document.body.appendChild(tervehdys);
	document.body.appendChild(poistonappi);
	
	localStorage.setItem('nimi', nimi);
}

function poista() {
	localStorage.removeItem('nimi');
	document.getElementById('tekstikappale').textContent = 'Data poistettu!';
}

main();
