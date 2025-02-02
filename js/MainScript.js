// Variables --------------------------------------------------------------------------------------------------------------------------------------------------
var PageType = 1;
var BGMusicOn = false;
var JerryTalkID = 1;
var randomWorldSFX = 1;
// Random Background --------------------------------------------------------------------------------------------------------------------------------------------------
function randombg(){
	var randomWorld= Math.floor(Math.random() * 21) + 0;
	randomWorldSFX = randomWorld;
	//console.log(randomWorldSFX);
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

// Ativar as Divs pela variável --------------------------------------------------------------------------------------------------------------------------------------------------
function PageChoose(){
	var audio = document.getElementById("ClickSound");
	audio.volume = 0.3;
	audio.play();

	if (PageType == 1) {
		document.getElementById('Page1_Intro').style.top = '15%'; //Will show
		document.getElementById('Page2_Apostilas').style.top = '-65%'; //Will hide
		document.getElementById('Page3_Repositorio').style.top = '-65%'; //Will hide
		document.getElementById('Page4_Provas').style.top = '-75%'; //Will hide
		document.getElementById('Page5_Disclaimer').style.top = '-65%'; //Will hide
		document.getElementById('Page7_HalldaFama').style.top = '-65%'; //Will hide
		document.getElementById('SiteTitle').style.backgroundImage = 'url(./img/Title01.png)';
	}
	if (PageType == 2) {
		document.getElementById('Page1_Intro').style.top = '-65%'; //Will show
		document.getElementById('Page2_Apostilas').style.top = '15%'; //Will hide
		document.getElementById('Page3_Repositorio').style.top = '-65%'; //Will hide
		document.getElementById('Page4_Provas').style.top = '-75%'; //Will hide
		document.getElementById('Page5_Disclaimer').style.top = '-65%'; //Will hide
		document.getElementById('Page7_HalldaFama').style.top = '-65%'; //Will hide
		document.getElementById('SiteTitle').style.backgroundImage = 'url(./img/Title02.png)';
	}
	if (PageType == 3) {
		document.getElementById('Page1_Intro').style.top = '-65%'; //Will hide
		document.getElementById('Page2_Apostilas').style.top = '-65%'; //Will hide
		document.getElementById('Page3_Repositorio').style.top = '15%'; //Will show
		document.getElementById('Page4_Provas').style.top = '-75%'; //Will hide
		document.getElementById('Page5_Disclaimer').style.top = '-65%'; //Will hide
		document.getElementById('Page7_HalldaFama').style.top = '-65%'; //Will hide
		document.getElementById('SiteTitle').style.backgroundImage = 'url(./img/Title03.png)';
	}
	if (PageType == 4) {
		document.getElementById('Page1_Intro').style.top = '-65%'; //Will hide
		document.getElementById('Page2_Apostilas').style.top = '-65%'; //Will hide
		document.getElementById('Page3_Repositorio').style.top = '-65%'; //Will hide
		document.getElementById('Page4_Provas').style.top = '11%'; //Will show
		document.getElementById('Page5_Disclaimer').style.top = '-65%'; //Will hide
		document.getElementById('Page7_HalldaFama').style.top = '-65%'; //Will hide
		document.getElementById('SiteTitle').style.backgroundImage = 'url(./img/Title04.png)';
	}
	if (PageType == 5) {
		document.getElementById('Page1_Intro').style.top = '-65%'; //Will hide
		document.getElementById('Page2_Apostilas').style.top = '-65%'; //Will hide
		document.getElementById('Page3_Repositorio').style.top = '-65%'; //Will hide
		document.getElementById('Page4_Provas').style.top = '-75%'; //Will hide
		document.getElementById('Page5_Disclaimer').style.top = '15%'; //Will show
		document.getElementById('Page7_HalldaFama').style.top = '-65%'; //Will hide
		document.getElementById('SiteTitle').style.backgroundImage = 'url(./img/Title05.png)';
	}
	if (PageType == 7) {
		document.getElementById('Page1_Intro').style.top = '-65%'; //Will hide
		document.getElementById('Page2_Apostilas').style.top = '-65%'; //Will hide
		document.getElementById('Page3_Repositorio').style.top = '-65%'; //Will hide
		document.getElementById('Page4_Provas').style.top = '-75%'; //Will hide
		document.getElementById('Page5_Disclaimer').style.top = '-65%'; //Will hide
		document.getElementById('Page7_HalldaFama').style.top = '15%'; //Will show
		document.getElementById('SiteTitle').style.backgroundImage = 'url(./img/Title06.png)';
	}
}

function ButtonChangePage1(){
	PageType = 1;
	JerryTextPick()
	PageChoose();
}

function ButtonChangePage2(){
	PageType = 2;
	PageChoose();
}

function ButtonChangePage3(){
	PageType = 3;
	PageChoose();
}

function ButtonChangePage4(){
	//PageType = 4;
	//PageChoose();
	alert("Você aperta o botão da sala secreta, mas nada acontece além de uma risada sinistra ao fundo... Será que foi o Jerry?");
}

function ButtonChangePage5(){
	PageType = 5;
	PageChoose();
}

function MusicOnPage6(){
	PageChoose();
	var BGMusic = document.getElementById("BGMusic");
	var BGSFX01 = document.getElementById("BGSFX01");
	var BGSFX02 = document.getElementById("BGSFX02");
	var BGSFX03 = document.getElementById("BGSFX03");
	var BGSFX04 = document.getElementById("BGSFX04");
	var BGSFX05 = document.getElementById("BGSFX05");
	if (BGMusicOn == false){
		BGMusic.volume = 0.3;
		BGMusic.play();
		if(randomWorldSFX === 1 || randomWorldSFX === 10 || randomWorldSFX === 15 || randomWorldSFX === 16){
			BGSFX01.play();
			BGSFX01.volume = 0.5;
		}
		if(randomWorldSFX === 18 || randomWorldSFX === 19 || randomWorldSFX === 20){
			BGSFX02.play();
			BGSFX02.volume = 0.5;
		}
		if(randomWorldSFX === 5){
			BGSFX03.play();
			BGSFX03.volume = 0.5;
		}
		if(randomWorldSFX === 0 || randomWorldSFX === 17 || randomWorldSFX === 9 || randomWorldSFX === 11){
			BGSFX04.play();
			BGSFX04.volume = 0.4;
		}
		if(randomWorldSFX === 2 || randomWorldSFX === 12 || randomWorldSFX === 13 || randomWorldSFX === 14){
			BGSFX05.play();
			BGSFX05.volume = 0.3;
		}
		BGMusicOn = true;
	}
	else{
		BGMusic.pause();
		BGSFX01.pause();
		BGSFX02.pause();
		BGSFX03.pause();
		BGSFX04.pause();
		BGSFX05.pause();
		BGMusic.currentTime = 0;
		BGMusicOn = false;
	}
	
}

function ButtonChangePage7(){
	PageType = 7;
	PageChoose();
}

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

// Carrossel Apostilas --------------------------------------------------------------------------------------------------------------------------------------------------

function JerryTextPick() {
	var JerryTalkID= Math.floor(Math.random() * 14) + 0;
	if (JerryTalkID == 1)
		document.getElementById('JerryDialogText').innerText = "Bem vindo ao 13º andar. Espera... eu já te disse isso.";
	if (JerryTalkID == 2)
		document.getElementById('JerryDialogText').innerText = "Eu estou fazendo café, você quer um pouco? Esses grãos foram comprados no planeta Xmazup-8. Ele tem um suave toque daquele negócio que vocês chamam de amêndoa, cassis e gasolina. ☕";
	if (JerryTalkID == 3)
		document.getElementById('JerryDialogText').innerText = "Eu não recomendo o café de Slonorg. Eles são pré-digeridos pela besta milenar Blot por 20 anos e depois secados sob a luz do terceiro sol vermelho. Só seres com 3 estômagos suportam o sabor. ☕☠️";
	if (JerryTalkID == 4)
		document.getElementById('JerryDialogText').innerText = "Há 5 eons atrás o universo estava ainda com pouca expansão física, e então os exploradores temporais estavam na moda. O conceito do gerador dimensional do 13º andar surgiu nessa época. Fascinante, não? 🚀";
	if (JerryTalkID == 5)
		document.getElementById('JerryDialogText').innerText = "Como eu vim parar aqui? Assim como você. Eu descobri um endereço estranho e fui ver o que era. Mas na minha época não haviam portas de saída aqui, só de entrada... Então eu tornei esse lugar minha casa e decidi permanecer aqui. 🏠";
	if (JerryTalkID == 6)
		document.getElementById('JerryDialogText').innerText = "Se o 13º Andar vai também até o mundo dos sonhos? Não. Eu desconfigurei essa opção do menu porque odeio corujas dimensionais. 🦉";
	if (JerryTalkID == 7)
		document.getElementById('JerryDialogText').innerText = "Se eu gosto de jogos? Em minha terra natal, Rumblafit, tínhamos o jogo dos 100 anos. Era um jogo de resistência sobre quem aguentava mais tempo acordado, e eu era campeão na modalidade com cafeína. ☕";
	if (JerryTalkID == 8)
		document.getElementById('JerryDialogText').innerText = "O botão do troféu? Ele apareceu uma noite e tem muito barulho vindo agora de uma nova porta lacrada. Acho que vai surgir uma coisa legal dali de dentro. 🏆";
	if (JerryTalkID == 9)
		document.getElementById('JerryDialogText').innerText = "Os escritos antigos na prateleira de apostilas? Não sei quem deixou eles ali, mas ás vezes novos surgem sem aviso. Deve haver algum fantasma nesse lugar que fica mexendo nessa sessão enquanto estou dormindo. 👻";
	if (JerryTalkID == 10)
		document.getElementById('JerryDialogText').innerText = "O quê é a sala secreta? Nem eu vou na sala secreta. O botão raramente funciona, e quando funciona, coisas ruins acontecem lá dentro, como pessoas de repente chorando enquanto uma música infernal começa a tocar sem parar... ☠️";
	if (JerryTalkID == 11)
		document.getElementById('JerryDialogText').innerText = "O repositório é uma área em que nossos visitantes mais assíduos deixam alguns materiais de estudo. Bons garotos. Será que no futuro também haverá algo seu ali para eu ler? 📚";
	if (JerryTalkID == 12)
		document.getElementById('JerryDialogText').innerText = "*Fui no banheiro, volto logo* 🚽";
	if (JerryTalkID == 13)
		document.getElementById('JerryDialogText').innerText = "Eu estou fazendo café, você quer um pouco? Esses grãos foram comprados no planeta Nikutori. Alguns dizem que o gosto se parece... com algo que vocês humanos chamam de frango frito. ☕🍗";

}

// Provas com e sem senha --------------------------------------------------------------------------------------------------------------------------------------------------

function Prova01(){ //TecInfo Informática
	window.open('https://drive.google.com/file/d/1lE-D4wY4b_5IozsmS6OqJIm6nouMogOf/view?usp=drive_link', '_blank').focus();
}

function Prova02(){ //TecInfo Jogos
	window.open('https://drive.google.com/file/d/1ufZG27lmH5xPxj1-IZovqrnIdzqeeCzl/view?usp=drive_link', '_blank').focus();
}

function Prova03(){ //GD1
	//window.open('https://drive.google.com/file/d/1RucJMq2IgGZiyjelC8613i3Kr9A0G8nb/view?usp=drive_link', '_blank').focus();
}

function Prova04(){ //AGG3
	window.open('https://drive.google.com/file/d/1DS49FzwbBxGFbP0aLo_MeXP9OUJv42Oe/view?usp=drive_link', '_blank').focus();
}

function Prova05() { //AGG1
  //const date = new Date();
  //const hour = date.getHours();
  //let password = prompt("Qual a senha para acessar o arquivo?", "Não sei");

  //if (password == "setsugetsuka") {
	window.open('https://drive.google.com/file/d/1A9WyE1wIWcupUuiahGTfIrjZhPBspnWj/view?usp=drive_link', '_blank').focus();
  //}
  //if (password == "batata" && hour >= 7 && hour <= 8) {
	//window.open('https://drive.google.com/file/d/1f1KUDaxSsfae1ltnUsRX6uXl3kEE677s/view?usp=drive_link', '_blank').focus();
  //}
  //else {
	//alert("Acesso negado!");
  //}
}

function Prova06() { //GD2
	const date = new Date();
	const hour = date.getHours();
	let password = prompt("Qual a senha para acessar o arquivo?", "Não sei");
  
	if (password == "setsugetsuka") {
		window.open('https://drive.google.com/file/d/1Ux18Q3BlvoL8KDi3XdbhBLX5wjiBpHKu/view?usp=drive_link', '_blank').focus();
	}
	if (password == "abismo" && hour >= 9 && hour <= 10) {
		window.open('https://drive.google.com/file/d/1Ux18Q3BlvoL8KDi3XdbhBLX5wjiBpHKu/view?usp=drive_link', '_blank').focus();
	}
	if (password == "caramelo" && hour >= 13 && hour <= 15) {
		window.open('https://drive.google.com/file/d/1Ux18Q3BlvoL8KDi3XdbhBLX5wjiBpHKu/view?usp=drive_link', '_blank').focus();
	}
	else {
	  alert("Acesso negado!");
	}
  }
