import { h, createApp, reactive } from './vue'

const A = {
  props: {
    count: Number
  },
  setup (props) {
    return () => {
      console.log('aaa')
      return h('div', props.count)
    }
  }
}

const B = {
  props: {
    count: Number
  },
  setup (props) {
    return () => {
      console.log('bbb')
      return h('div', props.count)
    }
  }
}

const App = {
  setup () {
    let data = reactive({
      count: 0
    })
    return () =>{
      return h(
          'button',
          {
            onClick: () => {
              data.count++
            }
          },
          data.count
        )
    }
  }
}

createApp().mount(App, '#app')
