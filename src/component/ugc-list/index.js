import {h, useEffect, useState} from 'fre'
import {getPost} from "api/get"
import {getAvatar, getSuo} from "public/js/util"
import './index.styl'

export default function UGCList(props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPost('原创', '', 2, 4).then(res => setPosts(res.posts))
  }, [])
  return <div className="ugc-list">
    <div className="wrap">
      <h1>个人投稿</h1>
      <ul className="posts">
        {posts && posts.map((item) => (<li>
            <div className="post">
              <div className="cover">
                <img src={getSuo(item.content)}/>
              </div>
              <div className="info">
                <div className="uqq"><img src={getAvatar(item.uqq)}/></div>
                <div className="title">{item.title}</div>
              </div>
            </div>
          </li>)
        )}
      </ul>
    </div>
  </div>
}