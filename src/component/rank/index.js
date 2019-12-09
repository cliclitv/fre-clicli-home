import {h, useEffect, useState} from 'fre'
import {getRank} from "api/get"
import {getSuo} from "public/js/util"
import './index.styl'
import {clink} from "public/js/const"

export default function Rank(props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getRank().then(res => {
      setPosts(res.posts)
    })
  }, [])
  return <div className="rank">
    <h1>排行榜</h1>
    <ul>
      {posts.length > 0 && posts.map((item, index) => {
        return index === 0 ? <li className='current'>
          <div className="cover">
            <img src={getSuo(item.content)}/>
          </div>
          <a target="_blank" href={`${clink}/play/gv${item.id}`}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="bom">
                <div className="tag">{item.tag}</div>
                <div className="idx">{index + 1}</div>
              </div>
            </div>
          </a>
        </li> : <li key={item.id}>
          <span className={index < 3 ? 'active' : ''}>{index + 1}</span>
          <a target="_blank" href={`${clink}/play/gv${item.id}`}>
            <div className='title'>{item.title}</div>
          </a>

        </li>
      })}
    </ul>
  </div>
}