import App from '../App.js';
class Control {
	constructor() {
		this.app = new App();
		this.arrow = null;
		this.lastArrow = null;

		window.addEventListener('keydown', (e) => {
			if (e.code === 'Space') {
				if (!this.app.bgMusic.paused) {
					this.app.bgMusic.pause();
					return;
				}
				this.app.bgMusic.loop = true;
				this.app.bgMusic.play();
			}
			if (
				e.code === 'ArrowUp' ||
				e.code === 'ArrowDown' ||
				e.code === 'ArrowLeft' ||
				e.code === 'ArrowRight' ||
				e.code === 'KeyW' ||
				e.code === 'KeyS' ||
				e.code === 'KeyA' ||
				e.code === 'KeyD'
			) {
				this.arrow =
					e.code === 'ArrowUp' || e.code === 'KeyW'
						? 'UP'
						: e.code === 'ArrowDown' || e.code === 'KeyS'
						? 'DOWN'
						: e.code === 'ArrowLeft' || e.code === 'KeyA'
						? 'LEFT'
						: 'RIGHT';
			}
		});
	}
}

export default Control;
