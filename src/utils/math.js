export class Vec2 {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}

export class RandomVec2 {
	constructor(tileSize) {
		this.x = Math.floor(Math.random() * tileSize) + 1;
		this.y = Math.floor(Math.random() * tileSize) + 1;
	}
}
