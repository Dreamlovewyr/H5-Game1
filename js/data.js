var dataObj = function () {
	this.fruitNum = 0
	this.double = 1
	this.score = 0
	this.gameOver = false
	this.alpha = 0
}

dataObj.prototype.reset = function () {
	this.fruitNum = 0
	this.double = 1
}

dataObj.prototype.draw = function () {
	var w = can1.width
	var h = can1.height
	ctx1.save()
	ctx1.shadowBlur = 10
	ctx1.shadowColor = 'white'
	ctx1.fillStyle = 'white'
	ctx1.fillText('SCORE: ' + this.score, 0.5 * w, h - 30)
	if (this.gameOver) {
		this.alpha += deltaTime * 0.0002
		if (this.alpha > 1) {
			this.alpha = 1
		}
		ctx1.fillStyle = 'rgba(255, 255, 255,' + this.alpha + ')'
		ctx1.fillText('GAMEOVER', 0.5 * w, 0.5 * h)
		if (this.score < 4000) {
			ctx1.fillText('太菜了，单国伟比你厉害很多啊', 0.5 * w, 0.5 * h + 30)
		} else {
		    ctx1.fillText('虽然分很高，但单国伟还是比你厉害，嘿嘿', 0.5 * w, 0.5 * h + 30)	
		}
	}
	ctx1.restore()
}

dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 * this.double
    this.fruitNum = 0
	this.double = 1
}