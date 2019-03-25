// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    loading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.loadDetail(options.id)
   let that  = this
  
  },
  loadDetail(id){
      let that = this
      wx.showLoading({
          title: "加载详情",
          mask: true,
      });
    wx.request({
        url: `https://www.koocv.com/h5-view/v/movie/detail/?id=${id}`,
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            let {data} =res
            that.setData({
               detail:{...data},
               loading:false
           })
           
           wx.setNavigationBarTitle({
               title: that.data.detail.title
           })
           wx.hideLoading();
        }
    })
  }
})