import {h, useRef, useEffect} from 'fre'
import './index.styl'
import {withSuspense} from '../../with-suspense'
import {getPostDetail} from '../../../fre/api/get'
import {getAvatar} from '../../../fre/public/js/util'
import snarkdown from 'snarkdown'

const usePost = withSuspense(getPostDetail)

export default function PostDetal() {
  const t = useRef(null)
  const post = usePost(4).result
  useEffect(() => {
    t.current.innerHTML = snarkdown(post.content)
  })
  return (<div className="post">
    <div className='post-detail'>
      <article ref={t}></article>
      <div className="tag">{post.tag}</div>
    </div>
    <div className="info">
      <div className="user">
        <img src={getAvatar(post.uqq)} alt={post.uqq}></img>
        <span>{post.uname}</span>
        <span>{post.uid}</span>
      </div>
      <h1>{post.title}</h1>
    </div>
  </div>)
}