import App from '../App.js';
import { Vec2 } from '../utils/math.js';

class Food {
	constructor() {
		this.app = new App();
		this.pos = this.randomVec2();
	}
	randomVec2() {
		return new Vec2(
			Math.floor(Math.random() * this.app.tileSize) + 1,
			Math.floor(Math.random() * this.app.tileSize) + 1
		);
	}
	getX() {
		return (this.pos.x - 1) * this.app.tile;
	}
	getY() {
		return (this.pos.y - 1) * this.app.tile;
	}
	draw() {
		this.checkCollide();
		this.app.ctx.fillStyle = 'green';
		this.app.ctx.fillRect(
			this.getX(),
			this.getY(),
			this.app.tile,
			this.app.tile
		);
	}
	checkCollide = () => {
		if (
			this.app.snake.pos.x === this.pos.x &&
			this.app.snake.pos.y === this.pos.y
		) {
			this.pos = this.randomVec2();
			this.app.snake.tails.length++;
		}
	};
}

export default Food;
