import React, { Component } from 'react';
import { Modal } from 'antd';
import { withRouter } from 'react-router-dom';

import './index.less';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import LinkBotton from '../link-botton';
/**
 * 头部组件
 */
class Header extends Component {

    //退出登陆
    lougout=()=>{
        //显示确认框
        Modal.confirm({
            content: '确认退出吗？',
            onOk: ()=>{
              //删除保存的user数据
              storageUtils.removeUser();
              memoryUtils.user={};
              //跳转到登陆界面 要用到this,所以使用箭头函数
              this.props.history.replace('/login');
            }
          })
    }

    render() {
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{memoryUtils.user.username}</span>
                    <LinkBotton onClick={this.lougout}>退出</LinkBotton>
                </div>
                {/* <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
                    <div className="header-bottom-right">
                        <span>2019-5-16 10:00:00</span>
                        <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="weather"></img>
                        <span>晴</span>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default withRouter(Header);
