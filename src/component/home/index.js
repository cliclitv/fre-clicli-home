import {h} from 'fre'
import Slider from 'widget/slider'
import Header from 'component/header'
import Tag from 'widget/tag'
import Recommend from 'component/recommend'
import Footer from 'component/footer'
import './index.styl'

export default function Home() {
  return (
    <div>
      <Slider/>
      <Header/>
      <Tag/>
      <div className="wrap">
        <Recommend/>
      </div>
      <Footer/>
    </div>
  )
}
