import { h } from 'fre'
import { clink } from 'public/js/const'
import './index.styl'

export default function Header () {
  const obj = {
    投稿教程: 905,
    使用说明: 31,
    补档: 99
  }
  return (
    <header>
      <div className="header">
        <div className='wrap'>
          <div className='logo'>
            <img src='https://ae01.alicdn.com/kf/He49d3080c54f496b867284497277e93e1.png'/>
          </div>
          <nav>
            <a href="https://app.clicli.me">APP 下载</a>
            {Object.keys(obj).map(key => (
              <a href={`${clink}play/gv${obj[key]}`}>{key}</a>
            ))}
          </nav>
          <div className='search'>
            <input type='text' placeholder='搜索一下下菊花又不会坏(⊙o⊙)…'/>
          </div>
          <div className="biu">
            <a>登陆</a>
            <a>注册</a>
          </div>
        </div>
      </div>
    </header>
  )
}
