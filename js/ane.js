var aneObj = function () {
	this.rootx = []
	this.headx = []
	this.heady = []
	this.alpha = 0
	this.amp = []
}

aneObj.prototype.num = 50
aneObj.prototype.init = function () {
  for (var i = 0; i <= this.num; i++) {
  	this.rootx[i] = i * 15 + Math.random() * 20  // [0, 1)
  	this.headx[i] = this.rootx[i]
  	this.heady[i] = canHeight - 250 + Math.random() * 50
  	this.amp[i] = Math.random() * 50 + 50
  }
}
aneObj.prototype.draw =function () {
  ctx2.save()
  this.alpha += deltaTime * 0.0008
  var l = Math.sin(this.alpha)
  ctx2.globalAlpha = 0.6
  ctx2.strokeStyle = '#3b154e'
  ctx2.lineWidth = 20
  ctx2.lineCap = 'round'
  for (var i = 0; i < this.num; i++) {
  	// beginPath moveTo lineTo strokeStyle lineWidth stroke lineCap globalAlpha
  	ctx2.beginPath()
  	ctx2.moveTo(this.rootx[i], canHeight)
  	this.headx[i] = this.rootx[i] + l * this.amp[i]
  	ctx2.quadraticCurveTo(this.headx[i], canHeight - 120, this.headx[i], this.heady[i])
  	ctx2.stroke()
  }
  ctx2.restore()
}