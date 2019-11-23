/**
 * 要求：能根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */

 import ajax from './ajax';

 //登陆
 export const reqLogin=(username,password)=>ajax(
    `http://47.101.141.240:8762/auth/oauth/token?grant_type=password&username=${username}&password=${password}`, 
     {},
     {
        headers:{
            Authorization:"Basic YW5kcm9pZDphbmRyb2lk"
        },
     },
    'POST');
