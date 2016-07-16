// Display Main Menu of the game
var menuState = {
		
	create: function() {
		
		// An example of how to draw the GUI and handle input
		var nameLabel = game.add.text(80, 80, 'My Game', {
			font: '50px Arial', fill: '#ffffff'
		});
		
		var startLabel = game.add.text(80, this.world.height - 80, 'Tap screen to start', {
			font: '25px Arial', fill: '#ffffff'
		});
		
		game.input.onTap.addOnce(this.start, this);
		
	},

	start: function() {
		game.state.start('play');
	}
		
};