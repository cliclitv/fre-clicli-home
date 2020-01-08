const puppeteer = require('puppeteer')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const util = require('util')
const readAsync = util.promisify(fs.readFile)
const writeAsync = util.promisify(fs.writeFile)

async function getSkey() {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
  const page = await browser.newPage()
  await page.goto('http://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=549000912&daid=5&style=40&s_url=https://user.qzone.qq.com/troubleshooter')
  console.log('go to huangzuan')

  await page.click('#switcher_plogin')
  await page.focus('#u')
  await page.keyboard.sendCharacter('1533540012')
  await page.focus('#p')
  await page.keyboard.sendCharacter('changhao1234')
  await page.click('#login_button')
  console.log('login success')

  try {
    await page.waitForNavigation({
      timeout: '10000'
    })
  } catch {
    await page.screenshot({path: path.resolve(__dirname, 'example.png')})
  }
  let cookie = await page.evaluate(() => document.cookie)
  let skey = await cookie.match(/skey=(\S*); /)[1]
  await browser.close()
  return skey
}

module.exports = {
  async getUrl(pa) {
    const dir = path.resolve(__dirname, './skey.json')
    const json = await readAsync(dir)
    const obj = JSON.parse(json)
    let skey = obj.skey
    const res = await axios.get(`http://qun.qzone.qq.com/cgi-bin/group_share_get_downurl?uin=1533540012&groupid=493355970&pa=${pa}&charset=utf-8&g_tk=${g_tk(skey)}`, {
      headers: {
        Cookie: `uin=o1533540012; skey=${skey};`
      }
    })
    try {
      return res.data.match(/url":"(\S*)"}/)[1].replace(/\\/g, '')
    } catch {
      const key = await getSkey()
      console.log(key)
      if (key) {
        await writeAsync(dir, JSON.stringify({skey: key}))
        return await this.getUrl(pa)
      } else {
        this.getUrl(pa)
      }
    }

  }
}

function g_tk(a) {
  for (var b = 5381, c = 0, d = a.length; c < d; ++c) b += (b << 5) + a.charCodeAt(c)
  return b & 2147483647
}