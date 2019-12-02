import Home from 'component/home'
const css = require('../docs/css/0.css')
import Celty from 'celty'

console.log(css)

const routes = [
  {
    path: '/',
    tag: 'fre-clicli-home',
    css,
    component: Home
  }
]

Celty.createApp(routes)
