
var altura = 0
var largura = 0
var vidas = 3
var tempo = 8
var criaMosquitoTempo = 1600

var nivel = window.location.search
nivel = nivel.replace('?', '')


if (nivel === 'normal') {
	criaMosquitoTempo = 1600
} else if(nivel === 'dificil'){
	criaMosquitoTempo = 1250
} else if(nivel === 'improvavel'){
	criaMosquitoTempo = 900
}



function ajustaTamanhoPalcoJogo() {
	largura = window.innerWidth
	altura = window.innerHeight	
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	document.getElementById('cronometro').innerHTML = tempo
	
	tempo -= 1

	if (tempo >= 0) {
		document.getElementById('cronometro').innerHTML = tempo 
		
	}else {
		document.getElementById('cronometro').innerHTML = 0
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
		clearInterval(cronometro)		
		
	}
}, 1000 )


function derrota() {
	if (vidas > 0) {
		if (document.getElementById('mosquito')) {
			document.getElementById('mosquito').remove()
			document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
			vidas--
			console.log(vidas + 'vidas')
			if (vidas == 0) {
				window.location.href = 'fim_de_jogo.html'
			clearInterval(criaMosca)		
			clearInterval(cronometro)
			} else{
				posicaoRandomica()
			}		
		} else{
			posicaoRandomica()
		}		
	}	
}



function posicaoRandomica() {	

	var posicaoX = Math.floor(Math.random() * largura) -90
	var posicaoY = Math.floor(Math.random() * altura) -90
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


	console.log(posicaoX, posicaoY)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()		
	}

	document.body.appendChild(mosquito)
	
	
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return'mosquito1'
		case 1:
			return'mosquito2'
		case 2:
			return'mosquito3'
	}	
}

function ladoAleatorio () {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return'ladoA'
		case 1:
			return'ladoB'		
	}
}

