// Game Play screen
var playState = {
		
	create: function() {
		
		this.player = game.add.sprite(16, 16, 'player');
		game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.inputEnabled = true;
		this.player.input.enableDrag();
		
		this.win = game.add.sprite(256, 256, 'win');
		game.physics.enable(this.win, Phaser.Physics.ARCADE);
	},
	
	update: function() {
		game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);
	},
	
	Win: function() {
		game.state.start('win');
	}
	
};