// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'init data', //字符串类型的数据
    myarray:[{msg:'hello'},{msg:'world'}], //数组类型的数据
    id:'v1',
    flag:true
  },

  //按钮的点击事件处理函数
  btnHandler1: function(event){
    console.log("点击了btnHandler1:" + event);
    this.setData({
      flag : !this.data.flag
    });
  },

  showLoading: function(){
    wx.showLoading({
      title: '数据加载中...',
    })
  },

  hideLoading: function(){
    wx.hideLoading();
  },

  requestHttpGET:function(){
    //方式一
    // wx.request({
    //   url: 'http://www.liulongbin.top:3005/api/get?id=1&age=20',
    //   success: (response) => {
    //     console.log(response)
    //   }
    // })

    //方式二
    wx.request({
      url: 'http://www.liulongbin.top:3005/api/get',
      data:{
        id:1,
        age:20
      },
      success:(response)=>{
        console.log(response)
      },
    })
  },

  requestHttpPOST:function(){
    wx.request({
      url: 'http://www.liulongbin.top:3005/api/post',
      method:"POST",
      data: {
        address: '北京',
        location:'顺义'
      },
      success: (response) => {
        console.log(response)
      },
    })
  },

  showT:function(){
    wx.showToast({
      title: 'hello world',
      icon:'fail'
    })
  },

  showMessageDialog:function(){
    wx.showModal({
      title: '这是标题',
      content: '这是内容',
    })
  },

  getUserInfo:function(){
    wx.request({
      url: 'https://testermapi.xlgxapp.com/partner/',
      header:{
        "token":"d51e3a73-5a4b-4402-8e03-1cdec1751ce6"
      },
      success:(res)=>{
        console.log("success:"+res.data.success)
      },
      fail:(res)=>{
        console.log("fail:" + res)
      }
    })
  },

  getVehicleInfo:function(){
    wx.request({
      url:"http://testermapi.xlgxapp.com/partner/vehicle?page=1&pageSize=10",
      header: {
        "token": "d51e3a73-5a4b-4402-8e03-1cdec1751ce6"
      },
      success:(res)=>{
        console.log("success:" + res)
      },
      fail: (res) => {
        console.log("fail:" + res)
      }
    })
  },

  dateFormat:function(){
    // var date = new Date()
    // var ddd = date.dateFormat("yyyy-MM-dd HH:mm:ss")
    // console.log("ddd:"+ddd)
    var util = require('../../utils/util.js');
    let time = util.formatTime(new Date("2019-06-20T08:08:23.000+0000"));
    console.log("time:" + time)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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