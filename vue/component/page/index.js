import { h } from 'fre'
import Tab from 'widget/tab'
import PostDetal from 'component/post-detail'
import './index.styl'

export default function Page(props) {
  return <div className='wrap'>
    <Tab/>
    <PostDetal/>
  </div>
}