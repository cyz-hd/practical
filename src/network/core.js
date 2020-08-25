import axios from "axios";
import {METHOD} from "./config";

const instance = axios.create({
  baseURL:"https://api.it120.cc/small4",
  timeout:10000
})
export function request(method,url,params){
  switch(method){
    case METHOD.GET:
      return GET(url,params);
    case METHOD.POST:
      return POST(url,params);
  }
}

function GET(url,params){
  return instance.get(url,params);
}

function POST(url,params){
  return instance.post(url,params);
}

