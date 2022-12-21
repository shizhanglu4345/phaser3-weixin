import Phaser from './libs/phaser.min.js'

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('hello-world')
  }

  preload() {
    // this.load.image('sky', '../assets/space3.png')

  }

  create() {
    let { windowWidth, windowHeight } = wx.getSystemInfoSync()
    let sky = this.add.image(0, 0, 'sky')
    sky.width = windowWidth
    sky.height = windowHeight

    this.cameras.main.setBackgroundColor(0x003366)

    this.fps_text = this.add.text(windowWidth / 3, windowHeight / 2, 'FPS:123', {
      fill: '#ffffff',
      fontSize: 24,
    });
  }
  update() {
    this.fps_text.setText('phaser成功加载');

  }
}
