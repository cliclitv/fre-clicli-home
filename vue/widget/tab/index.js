import {h} from 'fre'
import './index.styl'

export default function Tab() {
  const obj = {
    投稿教程: 905,
    使用说明: 31,
    补档: 99
  }
  return (<nav>
    {Object.keys(obj).map(key => (
      <li className='item'>{key}</li>
    ))}
  </nav>)
}