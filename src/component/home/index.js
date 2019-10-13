import { h } from 'fre'
import Slider from '../../widget/slider'
import Header from '../header'
import Tag from '../../widget/tag'
import './index.styl'

export default function Home () {
  return (
    <div>
      <Slider />
      <Header />
      <Tag />
    </div>
  )
}
