import Phaser from "phaser";
import config from './config/config';
import TitleScene from './scenes/title';

class Game extends Phaser.Game {

  constructor() {
    super(config);
    this.scene.add('Game', TitleScene);
    this.scene.start('Game');
  }
}

window.onload = function () {
  window.game = new Game();
}
