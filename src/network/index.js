import {request} from "./core";
import {METHOD,PATH} from "./config";

const netClient = {
  getList(params){
    return request(METHOD.GET,PATH.getlist,params)//全民砍价
  },
  log(params){
    return request(METHOD.GET,PATH.loginlist,params)//文章列表
  },
  classfig(params){
    return request(METHOD.GET,PATH.fig,params)//分类
  },
  particular(params){
    return request(METHOD.GET,PATH.particulars,params)//详情列表
  },
 
}
export default netClient;


