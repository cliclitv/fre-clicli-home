import {h,useEffect,useState} from 'fre'
import {getPost} from "api/get"

export default function Recommend(props) {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    getPost('','推荐',1,10).then(res=>{
      setPosts(res.posts)
    })
  },[])
  return <div>
    {posts.map(item=>{
      return <div>{item.title}</div>
    })}
  </div>
}