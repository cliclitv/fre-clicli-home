import {h, useRef, useEffect, useState} from 'fre'
import './index.styl'
import VideoList from 'component/video-list'
import {getPostDetail} from '../../../fre/api/get'
import {getAvatar} from '../../../fre/public/js/util'
import snarkdown from 'snarkdown'

export default function PostDetal() {
  const t = useRef(null)
  const [post, setPost] = useState({})
  useEffect(() => {
    getPostDetail(328).then(res => {
      setPost(res.result)
      t.current.innerHTML = snarkdown(res.result.content)
    })
  }, [])
  return (<div className="post">
    <div className='post-detail'>
      <article ref={t}></article>
    </div>
    <div className="right">
      <div className="info">
        <div className="user">
          <span className='avatar'><img src={getAvatar(post.uqq)} alt={post.uqq}></img></span>
          <span className='uname'>{post.uname}</span>
          <span className='uid'>uid：{post.uid}</span>
        </div>
        <h1>{post.title}</h1>
        <div>
          <span>{post.tag}</span>
          <span>{post.time}</span>
        </div>
      </div>
      <VideoList/>
    </div>
  </div>)
}