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
		this.length = 10;
	}
	draw() {
		this.tails.push(
			new createTail(
				new Vec2(this.app.snake.pos.x, this.app.snake.pos.y),
				this.app.tile
			)
		);
		if (this.tails.length > this.length + 1) {
			this.tails.shift();
		}

		for (let tail of this.tails) {
			this.app.ctx.fillRect(
				tail.getX() + this.app.padding * 0.5,
				tail.getY() + this.app.padding * 0.5,
				this.app.tile - this.app.padding,
				this.app.tile - this.app.padding
			);
		}
	}
}

export default Tails;
