//导航菜单配置
const menuList=[
    {
        title:'首页',//菜单标题名称
        key:'/home',//对应的path
        icon:'home',//图标名称
    },
    {
        title:'商品',
        key:'/products',
        icon:'appstore',
        children:[//子菜单列表
            {
                title:'品类管理',
                key:'/category',
                icon:'bars',
            },
            {
                title:'商品管理',
                key:'/product',
                icon:'tool',
            },
        ]
    },
    {
        title:'用户管理',
        key:'/user',
        icon:'user',
    },
    {
        title:'角色管理',
        key:'/role',
        icon:'safety',
    }
];

export default menuList;