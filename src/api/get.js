import {get} from "../public/js/fetch"

export function getPost(type, tag, page, pageSize, uid) {
  return get(`https://api.clicli.us/posts?status=public&sort=${type}&tag=${tag}&uid=${uid}&page=${page}&pageSize=${pageSize}`)
}

export function getRank() {
  return get('https://api.clicli.us/rank')
}