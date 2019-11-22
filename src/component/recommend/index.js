import {h, useEffect, useState} from 'fre'
import {getPost} from "api/get"
import {getSuo} from "public/js/util"
import './index.styl'
import {clink} from "public/js/const"

export default function Recommend(props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPost('', '推荐', 1, 10).then(res => {
      setPosts(res.posts)
    })
  }, [])
  return <div className="recommend">
    <h1>编辑推荐</h1>
    <ul>
      {posts&&posts.map(item => {
        return <li><a target="_blank" href={`${clink}play/gv${item.id}`}>
          <div className="cover">
            <img src={getSuo(item.content)}/>
          </div>
          <div className="title">{item.title}</div></a>
        </li>
      })}
    </ul>
  </div>
}