import {h, useState, useEffect} from 'fre'
import Eplayer from '../../widget/eplayer'
import {getVideoList} from '../../../fre/api/get'
import {getAvatar} from '../../../fre/public/js/util'
import './index.styl'

export default function VideoList() {
  const [video, setVideo] = useState([])
  const [content, setContent] = useState(null)
  useEffect(() => {
    getVideoList(328).then(res => {
      setVideo(res.videos)
    })
  }, [])

  function hide() {
    setContent(null)
    document.body.style.overflow = 'auto'
  }

  function show(url) {
    setContent(url)
    document.body.style.overflow = 'hidden'
  }

  return (<div className='video-list'>
    {video.map(item => (
      <li className='item' onClick={() => show(item.content)}>
        <img src={getAvatar(item.uqq)} alt={item.uqq}></img>
        <span>P {item.oid}</span>
        <span>{item.title}</span>
      </li>
    ))}
    {content && <Eplayer url={content} hide={hide}/>}
  </div>)
}