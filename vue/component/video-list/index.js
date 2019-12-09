import {h, useState, useEffect} from 'fre'
import Eplayer from '../../widget/eplayer'
import {getVideoList} from '../../../fre/api/get'
import {getAvatar} from '../../../fre/public/js/util'
import './index.styl'

export default function VideoList() {
  const [video, setVideo] = useState([])
  const [content, setContent] = useState('')
  useEffect(() => {
    getVideoList(328).then(res => {
      setVideo(res.videos)
    })
  }, [])
  return (<div className='video-list'>
    <Eplayer url={content}/>
    {video.map(item => (
      <li className='item' onClick={() => setContent(item.content)}>
        <img src={getAvatar(item.uqq)} alt={item.uqq}></img>
        <span>P {item.oid}</span>
        <span>{item.title}</span>
      </li>
    ))}
  </div>)
}