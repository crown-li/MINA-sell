//index.js
//获取应用实例
var app = getApp()
const sellerUrl = 'http://localhost:3000/api/seller';
const goodsUrl = 'http://localhost:3000/api/goods';
const ERR_OK = 0
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    seller: [],
    goods: [],
    flag: true,
    imglist: ['decrease_1', 'discount_1', 'guarantee_1', 'invoice_1','special_1'],
    imglist2: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
    winHeight: 0, // 屏幕高度
    currentTab: 0,
    viewTo:0
  },
  //滑动切换tab
  bindChange: function(e) {
    var that = this
    that.setData({
      currentTab: e.detail.current
    })
  },
  //点击tab切换
  swichNav: function(e){
    var that = this
    if (this.data.currentTab == e.target.dataset.current) {
      return false
    }else{
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  selectMenu: function(e){
    var index = e.currentTarget.dataset.index
    this.setData({
      viewTo:'index' + index
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
    //获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        // 获取Ratio值，根据Ratio改变图片名称
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
        //获取屏幕高度
        that.setData({
          winHeight: res.windowHeight
        })
      },
    }),
    // 获取商家信息
    wx.request({
      url: sellerUrl,
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
    }),
    //获取商品信息
    wx.request({
      url: goodsUrl,
      method: 'GET',
      header: {
        'Content-Type':'application/json'
      },
      success: function(res){
        res = res.data
        if(res.errno === ERR_OK){
          that.setData({
            goods: res.data
          })
        }
      }
    })
  }
  
})
