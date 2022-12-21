import Phaser from './libs/phaser.min.js'
import HelloWorldScene from './HelloWorldScene'

let { windowWidth, windowHeight } = wx.getSystemInfoSync()

const config = {
  type: Phaser.CANVAS,
  parent: 'app',
  canvas:canvas,
  width: windowWidth,
  height: windowHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [HelloWorldScene],
}

new Phaser.Game(config)

