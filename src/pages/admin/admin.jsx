import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';

import memoryUtils from '../../utils/memoryUtils';
import LeftNav from '../../components/left-nav/index';
import Header from '../../components/header/index';

import Home from '../home/home';
import Product from '../product/product';
import Role from '../role/role';
import User from '../user/user';

const {Footer, Sider, Content}=Layout;
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
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header哇哇</Header>
                    <Content style={{margin:'20px', backgroundColor:'#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/product' component={Product}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Route path='/user' component={User}></Route>
                            <Redirect to='/home'></Redirect>
                        </Switch>
                    </Content>
                    <Footer>Footer哇哇</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin;
