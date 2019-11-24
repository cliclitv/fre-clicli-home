import {h} from 'fre'
import {clink, alink} from 'public/js/const'
import './index.styl'

export default function Header() {
  const obj = {
    投稿教程: 905,
    使用说明: 31,
    补档: 99
  }
  return (
    <header style={{background:`url(${window.bg})`}}>
      <div className="header">
        <div className='wrap'>
          <nav>
            <a href={clink} className="active">主站</a>
            <a href="https://app.clicli.me">APP 下载</a>
            {Object.keys(obj).map(key => (
              <a href={`${clink}play/gv${obj[key]}`}>{key}</a>
            ))}
          </nav>
          <div className='search'>
            <input type='text' placeholder='搜索一下下菊花又不会坏(⊙o⊙)…'/>
          </div>
          <div className="biu">
            <a href={`${alink}/login`}>登陆</a>
            <a href={`${alink}/register`}>注册</a>
            <a className="user-center" href={alink}>投稿</a>
          </div>
        </div>
        <div className="wrap">
          <div className='logo'>

          </div>
        </div>
      </div>
    </header>
  )
}
