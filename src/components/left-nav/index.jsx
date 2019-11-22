import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Menu, Icon} from 'antd';

import './index.less';
import menuList from '../../config/menuConfig';
import logo from '../../assets/images/logo.png';

/**
 * 左侧导航的组件
 */
const { SubMenu } = Menu;
class LeftNav extends Component {

    /**
     *挂载函数：在第一次render()之前执行一次
     为第一个render()准备数据(必须同步的)
     */
    UNSAFE_componentWillMount(){
        this.menuNodes=this.getMenuNodes(menuList);
    }

    /**
     * 根据menu的数组生成对应的标签数组
     * 使用map()跟递归调用 还可以用reduce()+递归的方式实现
     */
    getMenuNodes=(menuList)=>{
        return menuList.map(item=>{
            if(!item.children){
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                const path=this.props.location.pathname;
                //查找一个与当前请求路径匹配的子item
                const cItem=item.children.find(cItem=>cItem.key===path);
                if(cItem){
                    this.openKey=item.key;
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }
    render() {
        //得到当前请求的path 使得默认选中菜单项高亮显示
        const path=this.props.location.pathname;
        const openKey=this.openKey
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt=""></img>
                    <h1>某培训机构</h1>
                </Link>

                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.menuNodes
                    }
               
                </Menu>
            </div>
        )
    }
}

/**
 * withRouter高阶组件：
 * 包装非路由组件，返回一个新的组件
 * 新的组件向非路由组件传递3个属性：history/location/match
 */
export default withRouter(LeftNav)