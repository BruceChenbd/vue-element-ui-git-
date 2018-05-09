import {post,get} from '../utils/request';
import {appkey} from '../utils/baogeAppkey';
import qs from 'qs';
/**
 * 新闻频道
 */
export function getNewsChannel(){
      return get('http://api.jisuapi.com/news/channel',{
          appkey,
      })
}

/**
 * 获取新闻
 */
export function getTitle(type,subject,pagesize,pagenum,sort,chapter){
    const data={
       appkey,
       type,
       subject,
       pagesize,
       pagenum,
       sort,
       chapter
    }
    return post('http://api.jisuapi.com/driverexam/query',qs.stringify(data))
}