import { h, useEffect, useRef } from 'fre'
import { createSlider } from './slider'

export default function Slider () {
  const wrap = useRef(null)
  useEffect(() => {
    createSlider({
      width: 400,
      loop: true,
      node: wrap
    })
  })
  return (
    <div id='wrap' ref='wrap'>
      <ul class='imgs'>
        <li>
          <img src='./static/1.png' />
        </li>
        <li>
          <img src='./static/2.jpg' />
        </li>
        <li>
          <img src='./static/3.jpg' />
        </li>
      </ul>
      <div class='dots'>
        <b class='active' />
        <b />
        <b />
      </div>
      <div class='prev' />
      <div class='next' />
    </div>
  )
}
