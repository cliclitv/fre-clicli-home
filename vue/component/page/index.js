import { h } from 'fre'
import Tab from 'widget/tab'
import PostDetal from 'component/post-detail'
import Footer from '../../../fre/component/footer'
import './index.styl'

export default function Page(props) {
  return <div>
    <div className='wrap'>
      <Tab/>
      <PostDetal/>
    </div>
    <Footer/>
  </div>
}