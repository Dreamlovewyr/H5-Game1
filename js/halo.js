var haloObj = function () {
	this.x = []
	this.y = []
	this.r = []
	this.alive = []
}
haloObj.prototype.num = 5
haloObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0
		this.y[i] = 0
		this.r[i] = 0
		this.alive[i] = false
	}
}
haloObj.prototype.draw = function () {
	ctx1.save()
	ctx1.lineWidth = 2
	ctx1.shadowBlur =10
	ctx1.shadowColor = 'rgba(203, 91, 0, 1)'
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			// draw
			this.r[i] += deltaTime * 0.05
            if (this.r[i] > 80) {
            	this.alive[i] = false
            	break
            }
            var alpha = 1 - this.r[i] / 80
            ctx1.beginPath()
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2 * Math.PI)
            ctx1.strokeStyle = 'rgba(203, 91, 0, ' + alpha + ')'
            ctx1.stroke()
            ctx1.closePath()
		}
	}
	ctx1.restore()
}

haloObj.prototype.born = function (x, y) {
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
          this.alive[i] = true
          this.r[i] = 10
          this.x[i] = x
          this.y[i] = y
		}
	}
}