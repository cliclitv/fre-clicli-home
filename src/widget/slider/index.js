import { h, useEffect, useRef } from 'fre'
import { createSlider } from './slider'
import './index.css'

export default function Slider () {
  const wrap = useRef(null)
  useEffect(() => {
    // console.log(window.sliders)
    createSlider({
      width: 760,
      loop: true,
      node: wrap
    })
  })
  const arr = [0, 1, 2, 3]
  return (
    <div id='wrap' ref={wrap}>
      <ul class='imgs'>
        <li>
          <img src={`https://cdn.jsdelivr.net/gh/cliclitv/fre-clicli-home@master/src/common/img/sliders/${arr[arr.length - 1]}.jpg?env=dev`} />
        </li>
        {arr.map(item => (
          <li>
            <img src={`https://cdn.jsdelivr.net/gh/cliclitv/fre-clicli-home@master/src/common/img/sliders/${item}.jpg?env=dev`} />
          </li>
        ))}
        <li>
          <img src={`https://cdn.jsdelivr.net/gh/cliclitv/fre-clicli-home@master/src/common/img/sliders/${arr[0]}.jpg?env=dev`} />
        </li>
      </ul>
      <div class='prev' />
      <div class='next' />
    </div>
  )
}
