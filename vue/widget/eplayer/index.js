import {h, useState, useEffect} from 'fre'
import {getPlayUrl} from '../../../fre/api/get'
import './index.styl'

export default function Eplayer(props) {
  const [url, setUrl] = useState('')
  const [type, setType] = useState('mp4')
  useEffect(() => {
    getPlayUrl(props.url).then(res => {
      setType(res.type || 'mp4')
      setUrl(res.url)
    })
  })
  return <e-player src={url} type={type}/>
}