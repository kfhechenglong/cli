// pages/list/list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subtitle:'加载中...',
    movies:[],
    hasMore:true,
    loading:true,
    title:'',
    type:'in_theaters',
    page:1,
    size:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   获取路由数据
    console.log(options)
    this.data.title = options.title || this.data.title;
    this.data.type = options.type || this.data.type;
    // 获取电影列表
    this.getMoviesList();
  },
    /**
     *  获取电影列表
     * */
    getMoviesList(){
        console.log(this.data)
        // 加载前的状态
        this.setData({
            subtitle:'玩命加载中...',
            loading:false
        })
        // 发起请求
        return app.api.find(this.data.type, this.data.page++,this.data.count)
        .then((res) => {
            console.log(res)
            if (res.subjects.length > 0){
                this.setData({
                    subtitle:res.title,
                    movies: this.data.movies.concat(res.subjects),
                    loading:false
                })
            } else {
                this.setData({
                    subtitle: res.title,
                    hasMore: false,
                    loading:false
                })
            }
        }).catch((e) => {
            this.setData({
                subtitle: '请求数据异常',
                loading: false
            });
            console.log(e)
        })
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})