import App from '../App.js';
import { Vec2 } from '../utils/math.js';

class createTail {
	constructor(vec2, tile) {
		this.pos = vec2;
		this.tile = tile;
	}
	getX() {
		return (this.pos.x - 1) * this.tile;
	}
	getY() {
		return (this.pos.y - 1) * this.tile;
	}
}
class Tails {
	constructor() {
		this.app = new App();
		this.tails = [];
		this.length = 0;
	}
	draw() {
		this.tails.push(
			new createTail(
				new Vec2(this.app.snake.pos.x, this.app.snake.pos.y),
				this.app.tile
			)
		);
		for (let tail of this.tails) {
			this.app.ctx.fillRect(
				tail.getX(),
				tail.getY(),
				this.app.tile,
				this.app.tile
			);
		}
		if (this.tails.length > this.length) {
			this.tails.shift();
		}
	}
}

export default Tails;