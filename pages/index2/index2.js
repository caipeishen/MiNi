//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo;
    wx.login({
      success: res => {
        var code = res.code;
        if (code) {
          // --------- 使用 code 换取 openid 和 session_key 等信息 ------------------
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx182d0278d896f507&secret=338944d9196059d18183cb02996648d2&js_code='+code+'&grant_type=authorization_code',
            method:'get',
            success: res => {
              if (res.statusCode == 200){
                app.globalData.userInfo.openid = res.data.openid;
                this.setData({
                  userInfo: e.detail.userInfo,
                  hasUserInfo: true
                })
              }
              console.log(app.globalData.userInfo);
            },
          },)
          // ------------------------------------
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    });
  }
})
