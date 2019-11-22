import {h, useEffect, useState} from 'fre'
import {getPost} from "api/get"
import {getSuo} from "public/js/util"
import './index.styl'

export default function Recommend(props) {
  const [posts, setPosts] = useState([])
  const [day,setDay] = useState(new Date().getDay())
  useEffect(() => {
    getPost('新番', '', 1, 100).then(res => {
      let ret = {}
      res.posts.forEach(item => {
        let day = new Date(item.time).getDay()
        ret[day] = ret[day] || []
        ret[day].push(item)
      })
      setPosts(ret)
    })
  }, [])
  const map = {
    0: '周日',
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六'
  }
  return <div className="week-list">
    <div className="wrap">
      <h1>更新表</h1>
      <ul>
        {Object.keys(posts).map((item,index) => <button className={index===day?'active':''} onClick={()=>setDay(index)}>{map[item]}</button>)}
      </ul>
    </div>
  </div>
}