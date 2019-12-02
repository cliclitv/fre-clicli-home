import {h, createApp, reactive} from './vue'
import Header from './component/header/header'

const App = {
  setup() {
    return () => (
      <Header/>
    )
  }
}

createApp().mount(App, '#app')
