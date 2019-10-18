import {h} from 'fre'
import Slider from 'widget/slider'
import Header from 'component/header'
import Tag from 'widget/tag'
import Recommend from 'component/recommend'
import Footer from 'component/footer'
import Rank from 'component/rank'
import './index.styl'

export default function Home() {
  return (
    <div>
      <Slider/>
      <Header/>
      <Tag/>
      <div className="wrap" style={{display: 'flex'}}>
        <Recommend/>
        <Rank/>
      </div>
      <Footer/>
    </div>
  )
}
