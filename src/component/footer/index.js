import { h } from 'fre'
import './index.styl'

export default function Footer() {
  return(
    <div className="footer">
      <div className="title">
        <img src="https://pic.superbed.cn/item/5cc52b543a213b04172979c8.png"/>
        <h1>CliCli弹幕网</h1>
      </div>
      <ul className="links">
        <li><a href="">关于我们</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">up主招募</a></li>
        <li><a href="">友情链接</a></li>
      </ul>
      <ul className="icons">
        <li><a href=""><i className="icon-font icon-qq"></i>QQ群</a></li>
        <li><a href=""><i className="icon-font icon-weibo"></i>微博</a></li>
        <li><a href=""><i className="icon-font icon-xiazai"></i>下载客户端</a></li>
      </ul>
    </div>
  )
}