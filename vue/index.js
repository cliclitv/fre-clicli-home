import {h, createApp, reactive} from './vue'

const App = {
  setup() {
    let data = reactive({
      count: 0
    })
    return () => (
      <div>{data.count}</div>
    )
  }
}

createApp().mount(App, '#app')
