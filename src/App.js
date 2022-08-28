import Snake from './features/Snake.js';
import Control from './features/Control.js';
import Food from './features/Food.js';

let initiate;
export default class App {
	constructor(canvas) {
		if (initiate) {
			return initiate;
		}
		initiate = this;

		this.cv = canvas;
		this.ctx = this.cv.getContext('2d');
		this.cv.width = this.cv.clientWidth;
		this.cv.height = this.cv.clientHeight;

		this.padding = 5;
		this.tileSize = 10;
		this.tile = this.cv.clientWidth / this.tileSize;
		this.level = 8;
		this.lastTimestamp = 0;

		this.snake = new Snake();
		this.food = new Food();
		this.control = new Control();
		this.bgMusic = new Audio('./src/assets/music/bg.mp3');
		this.eat = new Audio('./src/assets/music/eat.mp3');
		this.gameOver = new Audio('./src/assets/music/game-over.mp3');
		this.hoohTenan = new Audio('./src/assets/music/hooh-tenan.mp3');

		window.addEventListener('resize', () => {
			this.cv.width = this.cv.clientWidth;
			this.cv.height = this.cv.clientHeight;
			this.tile = this.cv.clientWidth / this.tileSize;
			this.cleanScreen();
		});
	}

	play() {
		this.update();
	}
	cleanScreen() {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.cv.clientWidth, this.cv.clientHeight);
	}

	update = (timestamp) => {
		this.animate = requestAnimationFrame(this.update);

		if (timestamp - this.lastTimestamp < 1000 / this.level) return;
		this.lastTimestamp = timestamp;

		this.cleanScreen();
		this.food.update();
		this.snake.update();
	};
}
