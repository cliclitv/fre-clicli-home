let routeQueue = []
let pathCache = {}

export function createApp(routes) {
  routeQueue = routes
  perfrom()
}

const perfrom = () => {
  for (let i = 0; i < routeQueue.length; i++) {
    const route = routeQueue[i]
    const currentPath = location.pathname || '/'

    let {path, tag, component, css} = route
    const [reg, params] = pathSlice(path)
    const res = currentPath.match(reg)

    if (!res) {
      const element = document.getElementsByTagName(tag)
      if (element[0].shadowRoot) {
        element[0].shadowRoot.innerHTML = ''
      }
      continue
    }

    let props = {}
    if (params.length) {
      params.forEach((item, index) => (props[item] = res[index + 1]))
    }

    reRender(tag, component, props, css)
  }
}

function pathSlice(path) {
  if (pathCache[path]) return pathCache[path]
  const slice = [
    new RegExp(
      `${path.substr(0, 1) === '*' ? '' : '^'}${path
        .replace(/:[a-zA-Z]+/g, '([^/]+)')
        .replace(/\*/g, '')}${path.substr(-1) === '*' ? '' : '$'}`
    )
  ]

  const params = path.match(/:[a-zA-Z]+/g)
  slice.push(params ? params.map(name => name.substr(1)) : [])

  pathCache[path] = slice
  return slice
}

function reRender(tag, component, props, css) {
  switch (tag.slice(0, 3)) {
    case 'fre':
      FreElement.component = component
      FreElement.props = props
      FreElement.css = css
      customElements.define(tag, FreElement)
      break
    case 'vue':
      VueElement.component = component
      VueElement.props = props
      VueElement.css = css
      customElements.define(tag, VueElement)
      break
  }
}

class FreElement extends HTMLElement {
  constructor() {
    super()
    this.update()
  }

  static get observedAttributes() {
    return ['path']
  }

  attributeChangedCallback() {
    this.update()
  }

  update() {
    const App = FreElement.component
    const props = FreElement.props
    Fre.render(Fre.h(App, props), this.createShadowRoot())
    addStyle(FreElement.css, this.shadowRoot)
  }
}

class VueElement extends HTMLElement {
  constructor() {
    super()
    this.update()
  }

  static get observedAttributes() {
    return ['path']
  }

  attributeChangedCallback() {
    this.update()
  }

  update() {
    const App = VueElement.component
    const rootProps = VueElement.props
    vueRender().mount(App, this.createShadowRoot(), rootProps)
    addStyle(VueElement.css, this.shadowRoot)
  }
}

export const push = url => {
  window.history.pushState(null, null, url)
  perfrom()
}

function addStyle(css, parent) {
  const el = document.createElement('style')
  el.type = 'text/css'
  el.innerHTML = css
  parent.appendChild(el)
}

window.addEventListener('popstate', perfrom)

export default {createApp, push}