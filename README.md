## Info

A starter template for game development using Cordova and Phaser created by myself.

It is always wise to organize your game into different states. It makes your code easier to maintain and many
other benefits. Some common states include:

* **Boot:** you might want to setup some global configurations here such as Scale Mode, Physics System, etc.

* **Load:** you should load all assets (sound, sprites, etc.) for your game while displaying a nice loading
message or brand image here

* **Menu:** a game should have a main menu. For example, a RPG game should have a main menu like New Game, Load
Game, Options, Quit

* **Play:** the main screen where your RPG world comes to life

* **Others:** you can have as many states as you like. For example, you might want to create a Menu state
to re-equip your heroes and change game settings.

## Game Orientation

You might want to lock your game orientation to either landscape or portrait if you don't want to deal with
the problem of orientation change on mobile devices. Just add/modify `config.xml` accordingly:

	<?xml version='1.0' encoding='utf-8'?>
	<widget id="com.example.helloCordova" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
	    
	    ...
	    
	    <icon src="res/icon.png"></icon>
	    
	    <preference name="Fullscreen" value="true" />
	    <preference name="Orientation" value="landscape" />
	    
	    ...
	    
	</widget>

## Credits

Thank to Richard Davey and his post about state management [here](http://perplexingtech.weebly.com/software-blog/using-states-in-phaserjs-javascript-game-developement).