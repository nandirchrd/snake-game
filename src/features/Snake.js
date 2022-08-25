import App from '../App.js';
import { Vec2 } from '../utils/math.js';

export default class Snake {
	constructor() {
		this.app = new App();
		this.pos = new Vec2(2, 1);
		this.vel = new Vec2(0, -1);
	}
	draw() {
		this.app.ctx.fillStyle = 'red';
		this.app.ctx.fillRect(
			this.getX(),
			this.getY(),
			this.app.tile,
			this.app.tile
		);

		this.update();
		this.detectCollision();
	}
	getX() {
		return (this.pos.x - 1) * this.app.tile;
	}
	getY() {
		return (this.pos.y - 1) * this.app.tile;
	}
	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;

		console.log(this.pos.x);
	}
	detectCollision() {
		// CHECK LEFT AND RIGHT WALLS
		this.pos.x =
			this.getX() > this.app.cv.clientWidth && this.vel.x > 0
				? 1
				: this.getX() < 0 && this.vel.x < 0
				? this.app.tileSize
				: this.pos.x;
		// CHECK BOTTOM AND TOP WALLS
		this.pos.y =
			this.getY() > this.app.cv.clientWidth && this.vel.y > 0
				? 1
				: this.getY() < 0 && this.vel.y < 0
				? this.app.tileSize
				: this.pos.y;
	}
}
