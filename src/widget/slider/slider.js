class Slider {
  constructor (options) {
    this.options = options
    this.order = 0
    this.dots = [...document.querySelectorAll('.dots b')]
    this.imgs = document.querySelector('.imgs')
    this.length = this.imgs.length
    this.timer
    this.setDot(1)
    this.autoPlay()
  }

  setDot (index) {
    this.order = index
    this.imgs.style.transform = `translate3d(${this.order * -this.options.width}px,0,0)`
  }
  autoPlay () {
    if (!this.options.loop) return
    this.timer = setInterval(() => {
      if (this.order > 3) this.order = 0
      this.setDot(this.order + 1)
    }, 5000)
  }
}

export function createSlider (options) {
  return new Slider(options)
}
