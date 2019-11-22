import React, { Component } from 'react';
import { Form, Icon, Input, Button, message} from 'antd';

import './login.less';
import logo from './images/logo.png';
import {reqLogin} from '../../api';
import memoryUtils from '../../utils/memoryUtils';

//登录的路由组件
class Login extends Component {

    handleSubmit=(event)=>{
        //阻止默认事件 
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            const {username,password}=values;
            if (!err) {
                let urlstr='http://47.101.141.240:8762/auth/oauth/token?grant_type=password&username='+username+'&password='+password;
                const response=await reqLogin(urlstr,username,password);
                const result=response.data;
                console.log(result);
                if(result.code===40001){
                    //提示登陆成功
                    message.success("登陆成功");
                    //保存user到内存中
                    memoryUtils.user={id:40001,username:"admin"};
                    //跳转到管理界面（不需要再回退到登陆）注意push和replace的区别
                    this.props.history.replace('/');
                }else{//登陆失败
                    //提示错误信息
                    message.error(result.msg);
                }
            }
          });
    }

    render() {
        const {getFieldDecorator}=this.props.form;
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"></img>
                    <h1>某培训机构管理服务平台</h1>
                </header>
                <section className='login-content'>
                    <h3>用户登录</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            //配置对象：属性名是特定的一些名称
                            //声明式验证：直接使用别人定义好的验证规则进行验证
                            rules: [
                                { required: true, whitespace: true, message: '请输入用户名!' },
                                // { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'}
                            ],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, whitespace: true, message: '请输入密码' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />
                        )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/**
 * 1、高阶函数
 * 1）一类特别的函数
 * a.接受函数类型的参数
 * b.返回值是函数
 * 2）常见
 * a.定时器：setTimeout()/setInterval()
 * b.Promise:Promise(()=>{}) then(value=>{},reason=>{})
 * c.数组遍历相关的方法：forEach()/filter()/map()/reduce
 * d.函数对象的bind()
 * e.Form.create()()/getFieldDecorator()()
 * 3)高阶函数更新动态，更加具有扩展性
 * 
 * 2、高阶组件
 * 1）本质就是一个函数
 * 2）接收一个组件（被包装组件），返回一个新的组件（包装组件），
 *    包装组件会向被包装组件传入特定属性
 * 3）作用：扩展组件的功能
 * 4）高阶组件也是高阶函数：接收一个组件函数，返回的是一个新的组件函数
 */
/**
 * 包装Form组件生成一个新的组件：Form(Login)
 * 新组件会向Form组件传递一个强大的对象属性：form
 */
const WrapLogin=Form.create()(Login);
export default WrapLogin;

/**
 * async和await
 * 1、作用？
 * 简化promise对象的使用：不用再使用then()来指定成功/失败的回调函数
 * 以同步编码（没有回调函数了）方式来实现异步流程
 * 2、哪里写await?
 * 在返回promise的表达式左侧写await: 不想要promise,想要promise异步执行的成功的value的数据
 * 3、哪里写async?
 * await所在函数（最近的）定义的左侧
 */
