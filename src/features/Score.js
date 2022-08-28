import App from '../App.js';

class Score {
	constructor() {
		this.app = new App();
		this.score = 0;
	}
	draw() {
		this.app.ctx.fillStyle = 'white';
		this.app.ctx.font = '1.5em arial';
		this.app.ctx.fillText(
			`Score : ${this.score}`,
			this.app.cv.width * 0.8,
			this.app.cv.width * 0.08
		);
	}
	update() {
		this.draw();
	}
}

export default Score;
