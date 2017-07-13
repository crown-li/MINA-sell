//index.js
//获取应用实例
var app = getApp()
const ERR_OK = 0
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    seller: [],
    flag: true,
    imglist: ['decrease_1', 'discount_1', 'guarantee_1', 'invoice_1','special_1']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    }),
    //获取屏幕Ratio值，根据Ratio改变图片名称
    wx.getSystemInfo({
      success: function(res) {
        let ratio = res.pixelRatio
        if(ratio > 2){
          that.setData({
            flag:false
          })
        }else{
          that.setData({
            flag: true
          })
        }
      },
    }),
    wx.request({
      url: 'http://localhost:3000/api/seller',
      method: 'GET',
      header: { 
        'Content-Type':'appliaction/json'
      },
      success: function(res){
        res = res.data
        if(res.errno === ERR_OK){
          that.setData({
            seller: res.data
          })
        }  
      },
      fail: function(err){
        console.log('获取数据失败！')
      }
    })
  }
})
