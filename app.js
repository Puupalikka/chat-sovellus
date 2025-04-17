function main() {
	if (!(localStorage.getItem('nimi'))) {
		let nappi = document.getElementById('rekisterointi');
		nappi.addEventListener('click', function() {
			toinen_sivu(document.getElementById('nimi').value)
			});
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
	poistonappi.className = 'nappi';
	poistonappi.id = 'poistonappi';
	poistonappi.addEventListener('click', poista);
	
	if (nimi != '') {
		tervehdys.textContent = 'Tervetuloa ' + nimi + '!';
	}else{
		tervehdys.textContent = 'Tervetuloa!';
	}
	
	document.body.appendChild(hedari);
	document.body.appendChild(tervehdys);
	document.body.appendChild(poistonappi);
	
	localStorage.setItem('nimi', nimi);
}

function poista() {
	localStorage.removeItem('nimi');
	document.getElementById('tekstikappale').id = 'poistoteksti';
	document.getElementById('poistoteksti').style = 'font-weight: bold';
	document.getElementById('poistoteksti').textContent = 'Data poistettu!';
	document.body.removeChild(poistonappi);
	
	const kuva = document.createElement('img');
	kuva.src = 'https://cdn.pixabay.com/photo/2012/04/16/13/57/trash-36103_1280.png';
	kuva.alt = 'kuva';
	kuva.id = 'kuva';
	document.body.appendChild(kuva);
}

main();
