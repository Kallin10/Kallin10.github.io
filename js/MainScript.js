// Variables --------------------------------------------------------------------------------------------------------------------------------------------------
var PageType = 1;

// Random Background --------------------------------------------------------------------------------------------------------------------------------------------------
function randombg(){
	var randomWorld= Math.floor(Math.random() * 21) + 0;
	var backgroundChoices = ["url(./img/Background_01.gif)",
							"url(./img/Background_02.gif)",
							"url(./img/Background_03.gif)",
							"url(./img/Background_04.gif)",
							"url(./img/Background_05.gif)",
							"url(./img/Background_06.gif)",
							"url(./img/Background_07.gif)",
							"url(./img/Background_08.gif)",
							"url(./img/Background_09.gif)",
							"url(./img/Background_10.gif)",
							"url(./img/Background_11.gif)",
							"url(./img/Background_12.gif)",
							"url(./img/Background_13.gif)",
							"url(./img/Background_14.gif)",
							"url(./img/Background_15.gif)",
							"url(./img/Background_16.gif)",
							"url(./img/Background_17.gif)",
							"url(./img/Background_18.gif)",
							"url(./img/Background_19.gif)",
							"url(./img/Background_20.gif)",
							"url(./img/Background_21.gif)",
							"url(./img/Background_22.gif)"];
	document.getElementById("MainBackground").style.backgroundImage=backgroundChoices[randomWorld];
}
randombg();

// Carrossel Apostilas --------------------------------------------------------------------------------------------------------------------------------------------------

var slider = tns({
	container: '.my-slider',
	items: 3, // Quantidade de itens que são exibidos ao mesmo tempo
	slideBy: 'page',
	autoplay: false,
	mouseDrag: true, // Seta se o carousel pode ser rotacionado com o movimento de clicar e arrastar do mouse
	autoplayButtonOutput: false, // Seta visibilidade do botão de auto play
	controls: false, // seta visibilidade das setas de controle
	nav: false // Seta visibilidade da navegação (3 pontinhos)
});
