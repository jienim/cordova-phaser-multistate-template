var app = {
		
	game: undefined,
	
	initialize: function() {
		// Uncomment this line for running on mobile
		//document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		// Uncomment this line for development on desktop
		this.onDeviceReady();
	},
	
	onDeviceReady: function() {
		game = new Phaser.Game(640, 480, Phaser.AUTO);
		
		game.state.add('boot', bootState);
		game.state.add('load', loadState);
		game.state.add('menu', menuState);
		game.state.add('play', playState);
		game.state.add('win', winState);
		
		game.state.start('boot');
	},
	
	exit: function(){
		navigator.app.exitApp();
	}
		
};

app.initialize();