import {h, useEffect, useState} from 'fre'
import {getPost} from "api/get"
import {getSuo} from "public/js/util"
import './index.styl'

export default function Recommend(props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPost('nowait', '新番', 1, 100).then(res => {
      let ret = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        0: [],
      }
      res.data.posts.forEach(item => {
        let day = new Date(item.time).getDay()
        ret[day].push(item)
      })
      setPosts(ret)
      window.ret = ret
    })
  }, [])
  return <div className="recommend">
    <h1>更新表</h1>
    <ul>
      {posts.map(item => {
        return <li>
          <div className="cover">
            <img src={getSuo(item.content)}/>
          </div>
          <div className="title">{item.title}</div>
        </li>
      })}
    </ul>
  </div>
}