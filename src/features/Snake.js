import App from '../App.js';
import { Vec2 } from '../utils/math.js';
import Tails from './Tails.js';

export default class Snake {
	constructor() {
		this.app = new App();
		this.tails = new Tails();
		this.pos = new Vec2(2, 1);
		this.vel = new Vec2(0, -1);
	}
	draw() {
		this.app.ctx.fillStyle = 'red';
		this.app.ctx.fillRect(
			this.getX() + this.app.padding * 0.5,
			this.getY() + this.app.padding * 0.5,
			this.app.tile - this.app.padding,
			this.app.tile - this.app.padding
		);
		this.tails.draw();

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

		this.vel =
			this.app.control.arrow === 'LEFT' && this.vel.x !== 1
				? new Vec2(-1, 0)
				: this.app.control.arrow === 'RIGHT' && this.vel.x !== -1
				? new Vec2(1, 0)
				: this.app.control.arrow === 'UP' && this.vel.y !== 1
				? new Vec2(0, -1)
				: this.app.control.arrow === 'DOWN' && this.vel.y !== -1
				? new Vec2(0, 1)
				: this.vel;
	}
	detectCollision() {
		// CHECK LEFT AND RIGHT WALLS
		this.pos.x =
			this.getX() >= this.app.cv.clientWidth > 0
				? 1
				: this.getX() < 0
				? this.app.tileSize
				: this.pos.x;
		// CHECK BOTTOM AND TOP WALLS
		this.pos.y =
			this.getY() >= this.app.cv.clientHeight > 0
				? 1
				: this.getY() < 0
				? this.app.tileSize
				: this.pos.y;
	}
}
