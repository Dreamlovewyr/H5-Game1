var babyObj = function () {
	this.x
	this.y
	this.angle
	this.babyTailTimer = 0
	this.babyTailCount = 0
	this.babyEyeTimer = 0
	this.babyEyeCount = 0
	this.babyEyeInterval = 1000
	this.babyBodyTimer = 0
    this.babyBodyCount = 0
}

babyObj.prototype.init = function () {
	this.x = canWidth * 0.5 - 50
	this.y = canHeight * 0.5 + 50
	this.angle = 0
}

babyObj.prototype.draw = function () {
	// lerp x,y
	this.x = lerpDistance(mom.x, this.x, 0.98)
	this.y = lerpDistance(mom.y, this.y, 0.98)
	// lerp angle
	var deltaX = mom.x - this.x
	var deltaY = mom.y - this.y
	var beta = Math.atan2(deltaY, deltaX) + Math.PI
	this.angle = lerpAngle(beta, this.angle, 0.6)
	// babyTail timer count
	this.babyTailTimer += deltaTime
	if (this.babyTailTimer > 50) {
		this.babyTailCount = (this.babyTailCount + 1) % 8
		this.babyTailTimer %= 50
	}
	this.babyEyeTimer += deltaTime
	if (this.babyEyeTimer > this.babyEyeInterval) {
		this.babyEyeCount = (this.babyEyeCount + 1) % 2
		this.babyEyeTimer %= this.babyEyeInterval
		if (this.babyEyeCount === 0) {
			this.babyEyeInterval = Math.random() * 1500 + 2000
		} else {
			this.babyEyeInterval = 200
		}
	}
	this.babyBodyTimer += deltaTime
	if (this.babyBodyTimer > 120) {
		this.babyBodyCount = this.babyBodyCount + 1
		this.babyBodyTimer %= 120
		if (this.babyBodyCount > 19) {
			this.babyBodyCount = 19
			// game over
			data.gameOver = true
		}
	}
	var tailCount = this.babyTailCount
	var eyeCount = this.babyEyeCount
	var bodyCount = this.babyBodyCount
	// ctx1
	ctx1.save()
	ctx1.translate(this.x, this.y)
	ctx1.rotate(this.angle)
	ctx1.drawImage(babyTail[tailCount], -babyTail[tailCount].width * 0.5 + 23, -babyTail[tailCount].height * 0.5)
	ctx1.drawImage(babyBody[bodyCount], -babyBody[bodyCount].width * 0.5, -babyBody[bodyCount].height * 0.5)
	ctx1.drawImage(babyEye[eyeCount], -babyEye[eyeCount].width * 0.5, -babyEye[eyeCount].height * 0.5)	
	ctx1.restore()
}
