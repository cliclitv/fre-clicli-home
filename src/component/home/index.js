import { h } from 'fre'
import Slider from 'widget/slider'
import Header from 'component/header'
import Tag from 'widget/tag'
import Recommend from 'component/recommend'
import './index.styl'

export default function Home () {
  return (
    <div>
      <Slider />
      <Header />
      <Tag />
      <Recommend/>
    </div>
  )
}
