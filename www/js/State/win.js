// Can be any state depending on your game such as Win, Lose, etc. States
var winState = {
	
	create: function() {
		
		var winLabel = game.add.text(80, 80, 'YOU WON!', {
			font: '50px Arial', fill: '#00FF00'
		});
		
		var startLabel = game.add.text(80, game.world.height - 80, 'Tap to exit', {
			font: '25px Arial', fill: '#ffffff'
		});
		
		game.input.onTap.addOnce(app.exit, this);
	}
		
};