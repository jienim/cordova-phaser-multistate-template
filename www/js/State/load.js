// Display loading text, load assets and call Menu State
var loadState = {
		
	preload: function() {
		
		// Add a loading label on the screen
		var loadingLabel = game.add.text(80, 150, 'loading...', {
			font: '30px Courier',
			fill: '#ffffff'
		});
		
		// Load game assets
		game.load.image('player', 'assets/player.png');
		game.load.image('win', 'assets/win.png');
		
	},
	
	create: function() {
		// Call Menu State
		game.state.start('menu');
	}
		
};