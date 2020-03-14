import 'phaser';
import logoImg from "../assets/logo.png";

export default class TitleScene extends Phaser.Scene {
  
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image("logo", logoImg);
  }
  
  create() {
    this.add.image(400, 150, "logo");
  }
}