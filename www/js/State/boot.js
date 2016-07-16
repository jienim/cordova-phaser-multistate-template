// Simply starting up the physics system and call LoadState
var bootState = {
		
	create: function() {
		// Setup Scale Mode
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		
		// Starting up the physics system, e.g., Arcade Physics
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		// Calling the load state
		game.state.start('load');
	}
		
};