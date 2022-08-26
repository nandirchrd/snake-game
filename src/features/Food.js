import App from '../App.js';
import { RandomVec2 } from '../utils/math.js';

class Food {
	constructor() {
		this.app = new App();
		this.pos = new RandomVec2(this.app.tileSize);
	}
	getX() {
		return (this.pos.x - 1) * this.app.tile;
	}
	getY() {
		return (this.pos.y - 1) * this.app.tile;
	}
	draw() {
		this.app.ctx.fillStyle = 'green';
		this.app.ctx.fillRect(
			this.getX() + this.app.padding * 0.5,
			this.getY() + this.app.padding * 0.5,
			this.app.tile - this.app.padding,
			this.app.tile - this.app.padding
		);
	}
	update = () => {
		this.draw();
	};
}

export default Food;
