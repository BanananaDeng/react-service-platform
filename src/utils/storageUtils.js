/**
 * 进行Local数据存储管理的工具模块,localStorage兼容性问题没解决
 */
const USER_KEY='user_key';
export default{
    /**
     * 保存user
     */
    saveUser(user){
        localStorage.setItem(USER_KEY,JSON.stringify(user));
    },
    /**
     * 读取user
     */
    getUser(){
        return JSON.parse(localStorage.getItem(USER_KEY)||'{}');
    },
    /**
     * 删除user
     */
    removeUser(){
        localStorage.removeItem(USER_KEY);
    }
}