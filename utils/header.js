/**
 * Created by he on 2018/2/22.
 */

/**
 * 统一封装请求的格式，并以Promise返回
 * **/
module.exports = function (api,path,params){
    return new Promise((resolve , reject) => {
            wx.request({
                url:`${api}/${path}`,
                data: Object.assign({},params),
                header: { 'Content-Type': 'json' },
                success:resolve,
                fail:reject,
            })
    })
}