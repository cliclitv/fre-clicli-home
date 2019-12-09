import {h, useEffect, useRef} from 'fre'
import {getPlayUrl} from '../../../fre/api/get'
import './index.styl'

export default function Eplayer(props) {
  const t = useRef(null)
  useEffect(() => {
    getPlayUrl(props.url).then(res => {
      t.current.setAttribute('src', res.url)
      t.current.setAttribute('type', res.type)
    })
  }, [props.url])

  return <e-player ref={t}/>
}