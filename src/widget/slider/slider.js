class Slider {
  constructor (options) {
    this.options = options
    this.order = 0
    this.dots = [...document.querySelectorAll('.dots b')]
    this.imgs = document.querySelector('.imgs')
    this.timer
    this.dotClick()
    this.autoPlay()
    this.touch()
  }
  touch () {
    this.options.node.ontouchstart = e => this.touchStart(e)
    this.options.node.ontouchmove = e => this.touchMove(e)
    this.options.node.ontouchend = e => this.touchEnd(e)
  }

  touchStart (e) {
    this.offsetX = 0
    let touch = e.targetTouches[0]
    let x = touch.pageX
    this.x0 = x
  }

  touchEnd () {
    let len = this.offsetX - this.order * this.options.width
    if (len > 200) {
      if (this.order === this.dots.length - 1) return
      this.setDot(this.order + 1)
    } else if (len < -200) {
      if (this.order === 0) return
      this.setDot(this.order - 1)
    } else {
      this.setDot(this.order)
    }
  }

  touchMove (e) {
    let touch = e.targetTouches[0]
    let x = touch.pageX
    this.direct = this.x0 - x
    this.offsetX = this.direct + this.order * this.options.width
    if (this.direct < -50) {
      // console.log('向右')
      if (this.order === 0) return
      this.imgs.style.transform = `translate3d(${-this.offsetX}px,0,0)`
    } else if (this.direct > 50) {
      // console.log('向左')
      if (this.order === this.dots.length - 1) return
      this.imgs.style.transform = `translate3d(${-this.offsetX}px,0,0)`
    }
  }
  dotClick () {
    this.dots.forEach((item, index) => {
      item.addEventListener('click', () => {
        clearInterval(this.timer)
        this.setDot(index)
        this.autoPlay()
      })
    })
  }
  setDot (index) {
    this.dots.forEach(item => (item.className = ''))
    this.order = index
    this.dots[index].className = 'active'
    this.imgs.style.transform = `translate3d(${this.order * -this.options.width}px,0,0)`
  }
  autoPlay () {
    if (!this.options.loop) return
    this.timer = setInterval(() => {
      this.order++
      if (this.order > 2) this.order = 0
      this.setDot(this.order)
    }, 3000)
  }
}

export function createSlider (options) {
  return new Slider(options)
}
