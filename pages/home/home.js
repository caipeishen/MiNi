//request.js
import anaApi from '../../api/ana.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    anaList:[],
    page:{
      current:1,
      pageSize:100,
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let params = { ...this.page};
    anaApi.getAnaList(params).then(res=>{
      if(res.code==200){
        this.setData({
          anaList: res.data.list
        })
        console.log(res.data.list);
      }else{
        console.log(res);
      }
    });
    
  }
})
