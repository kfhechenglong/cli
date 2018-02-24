//logs.js
const app = getApp();

Page({
     data: {
        movies: [],
        loading:true
    },
    /*
    生命周期函数，监听页面加载
    */ 
    onLoad: function (e) {
        // 获取请求数据
        this.lookStorage().then((res)=>{
            if(res){
                console.log(res)
                return this.setData({ movies: res.movies, loading: false });
            }
            app.api.find('coming_soon', 1, 3).then((res) => {
                this.setData({
                    movies: res.subjects,
                    loading: false
                });
                return app.wechat.setStorage('last_splash_data', {
                    movies: res.subjects,
                    expires: Date.now() + 1 * 24 * 60 * 60 * 1000
                })
            })
        });
    },
    // 查看存储是否过期
    lookStorage () {
        // 获取本地stroage
        return new Promise((resolev,reject) => {
            app.wechat.getStorage('last_splash_data')
                .then((res) => {
                    const { movies, expires } = res.data;
                    if (movies && expires > Date.now()) {
                        return resolev(res.data);
                    }
                    return resolev(null);
                }).catch((e) => {
                    resolev(null);
                })
        });
        
    },
    // 点击进入主界面
    hanldStart (){
        console.log('页面跳转');
        wx.switchTab({
            url:'../board/board'
        })
    },
    onReady (){
        // 初始渲染函数
    },
    onShow(e){
    }
})
