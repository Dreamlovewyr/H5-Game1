// 判断大鱼与果实间的距离
function momFruitsCollision () {
	if (!data.gameOver) {
      for (var i = 0; i < fruit.num; i++) {
	  	if (fruit.alive[i]) {
	  		// calculate length
	  		var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y)
	        if (l < 900) {
	        	// fruit eaten
	        	fruit.dead(i)
	        	// data变化
	        	data.fruitNum++
	        	mom.momBodyCount++
	        	if (mom.momBodyCount > 7) {
	        		mom.momBodyCount = 7
	        	}
	        	if (fruit.fruitType[i] === 'blue') {
	        		data.double = 2
	        	}
	        	wave.born(fruit.x[i], fruit.y[i])
	        }
	  	}
	  }
	}
}

function momBabyCollision () {
	if (data.fruitNum > 0 && !data.gameOver) {
      var l = calLength2(baby.x, baby.y, mom.x, mom.y)
	  if (l < 900) {
	  	baby.babyBodyCount = 0
	  	mom.momBodyCount = 0
	  	data.addScore()
	  	halo.born(baby.x, baby.y)
	  }
	}
}