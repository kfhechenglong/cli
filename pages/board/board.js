//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
    data: {
        boards: [
            {key:'in_theaters'},
            {key:'coming_soon'},
            { key:'top250'}
        ],
        loading:true
    },
    //   页面加载完成，获取数据
    onLoad: function () {
        this.lookStorage().then((res) =>{
            if(res) {
                return this.setData({ boards: res, loading: false, });
            }
            const promises = this.data.boards.map((board) => {
                return app.api.find(board.key, 1, 10).then((res) => {
                    board.title = res.title;
                    board.movies = res.subjects;
                    // console.log(res)
                    return board;
                });
            });
            // console.log(promises)
            Promise.all(promises).then((res) => {
                // console.log(res)
                app.wechat.setStorage('board_data', {
                    boardData: res,
                    expires: Date.now() + 1 * 24 * 60 * 60 * 1000
                });
                return this.setData({
                    boards: res,
                    loading: false,
                });
            });
        });
    },
    // 查看存储是否过期
    lookStorage() {
        // 获取本地stroage
        return new Promise((resolev, reject) => {
            app.wechat.getStorage('board_data')
                .then((res) => {
                    const { boardData, expires } = res.data;
                    if (boardData && expires > Date.now()) {
                        return resolev(boardData);
                    }
                    return resolev(null);
                }).catch((e) => {
                    resolev(null);
                })
        });
    },
    
})
