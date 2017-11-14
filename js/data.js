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
		ctx1.fillText('GAMEOVER', 0.5 * w, 0.5 * h - 20)
		if (this.score < 2000) {
			ctx1.fillStyle = 'blue'
			ctx1.fillText('有点菜，加油哦', 0.5 * w, 0.5 * h + 30)
		} else if (this.score < 4000) {
			ctx1.fillStyle = 'blue'
		    ctx1.fillText('还可以哦，继续努力', 0.5 * w, 0.5 * h + 30)	
		} else {
			ctx1.fillStyle = 'red'
		    ctx1.fillText('恭喜你，已经成为大神了！', 0.5 * w, 0.5 * h + 30)
		}
	}
	ctx1.restore()
}

dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 * this.double
    this.fruitNum = 0
	this.double = 1
}