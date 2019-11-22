import {h, useEffect, useState} from 'fre'
import {getRank} from "api/get"
import {getSuo} from "public/js/util"
import './index.styl'

export default function Recommend(props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getRank().then(res => {
      setPosts(res.posts)
    })
  }, [])
  return <div className="rank">
    <h1>排行榜</h1>
    <ul>
      {posts&&posts.map((item, index) => {
        return index === 0 ? <li className='current'>
          <div className="cover">
            <img src={getSuo(item.content)}/>
          </div>
          <div className="info">
            <div className="title">{item.title}</div>
            <div className="bom">
              <div className="tag">{item.tag}</div>
              <div className="idx">{index + 1}</div>
            </div>
          </div>
        </li> : <li>
          <span className={index < 3 ? 'active' : ''}>{index + 1}</span>
          <div className='title'>{item.title}</div>
        </li>
      })}
    </ul>
  </div>
}