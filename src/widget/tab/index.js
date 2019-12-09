import {h} from 'fre'
import './index.styl'
import {push} from '../../use-routes'

export default function Tab() {
  const obj = {
    投稿教程: 905,
    使用说明: 31,
    补档: 99
  }
  return (<nav>
    {Object.keys(obj).map(key => (
      <li className='item' onClick={()=>push(`/play/gv${obj[key]}`)}>{key}</li>
    ))}
  </nav>)
}