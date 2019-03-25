// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
        {
            type:"爱情",
            url:"/souce/aiqing.png"
        },
        {
            type:"动画",
            url:"/souce/donghua.png"
        },
        {
            type:"动作",
            url:"/souce/dongzuo.png"
        },
        {
            type:"科幻",
            url:"/souce/kehuan.png"
        },
        {
            type:"喜句",
            url:"/souce/xiju.png"
        }
    ]
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

  },
  tap(e){
      let {type}=e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/subjectList/subject-list?type=${type}`,
      })
  }
})