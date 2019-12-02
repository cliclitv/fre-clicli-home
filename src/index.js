import Home from 'component/home'
import 'public/css/style.css'
import Celty from 'celty'

const routes = [
  {
    path: '/',
    tag: 'fre-clicli-home',
    component: Home
  }
]

Celty.createApp(routes)
