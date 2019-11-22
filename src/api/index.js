/**
 * 要求：能根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */

 import ajax from './ajax';

 //登陆
 export const reqLogin=(url,username,password)=>ajax(
     url, 
     {},
     {
        headers:{
            Authorization:"Basic YW5kcm9pZDphbmRyb2lk"
        },
     },
    'POST');
