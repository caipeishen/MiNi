//request.js
import anaApi from '../../api/ana.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    anaList:[],
    pages:{
      current:1,
      pageSize:10,
    },
    scroll_height:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面初始化
  onLoad: function () {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth
    })
    this.getAnaList();
  },
  //滚动加载数据
  scrollLoadData(){
   this.setData({
     pages: {
       current: this.data.pages.current + 1,
       pageSize: this.data.pages.pageSize
     }
   })
    this.getAnaList();
  },
  //逐步获取短句数据
  getAnaList(){
    let params = this.data.pages;
    anaApi.getAnaList(params).then(res => {
      if (res.code == 200) {
        this.data.anaList.push(...res.data.list);
        this.setData({
          anaList: this.data.anaList
        })
      } else {
        console.log(res);
      }
    });
  }
  
})
