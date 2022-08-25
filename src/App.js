import Snake from './features/Snake.js';

let initiate;
export default class App {
	constructor(canvas) {
		if (initiate) {
			return initiate;
		}
		initiate = this;

		this.cv = canvas;
		this.cv.width = this.cv.clientWidth;
		this.cv.height = this.cv.clientHeight;
		this.ctx = this.cv.getContext('2d');

		this.tileSize = 10;
		this.tile = this.cv.clientWidth / this.tileSize;

		this.snake = new Snake();
		this.level = 2;
		this.lastTimestamp = 0;

		console.log('APP');

		window.addEventListener('resize', () => {
			this.cv.width = this.cv.clientWidth;
			this.cv.height = this.cv.clientHeight;
			this.tile = this.cv.clientWidth / this.tileSize;
			this.cleanScreen();
			this.draw();
		});
		this.draw();
	}

	play() {
		this.update();
	}
	reset() {}
	cleanScreen() {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.cv.clientWidth, this.cv.clientHeight);
	}
	draw() {
		this.snake.draw();
	}

	update = (timestamp) => {
		requestAnimationFrame(this.update);

		if (timestamp - this.lastTimestamp < 1000 / 1 / this.level) return;
		this.lastTimestamp = timestamp;

		this.cleanScreen();
		this.draw();
	};
}
