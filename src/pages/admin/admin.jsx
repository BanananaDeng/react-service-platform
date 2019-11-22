import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import memoryUtils from '../../utils/memoryUtils';

//管理的路由组件
class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        //如果内存没有存储user==>当前没有登陆
        if(!user||!user.id){
            //自动跳转到登陆界面
            return <Redirect to='/login'></Redirect>
        }
        return (
            <div>
                hello {user.username}
            </div>
        )
    }
}

export default Admin;
