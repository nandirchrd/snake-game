import App from './src/App.js';

window.addEventListener('load', () => {
	const canvas = document.getElementById('game');
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	const Game = new App(canvas);

	Game.play();
});
