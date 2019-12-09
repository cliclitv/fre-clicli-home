import { h, render } from 'fre'
import Home from 'component/home'
import {useRoutes} from './use-routes'
import Page from './component/page'
const routes = {
  '/':Home,
  '/play/:gv':Page
}

const App = () => useRoutes(routes)

render(<App />, document.body)
