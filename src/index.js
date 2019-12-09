import { h, render } from 'fre'
import Home from 'component/home'
import {useRoutes} from './use-routes'
import Page from './component/page'
const routes = {
  '/':Home,
  '/play/:gv':Page
}

const App = () => {
  const res = useRoutes(routes)
  console.log(res)
  return res
}

render(<App />, document.body)
