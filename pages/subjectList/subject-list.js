// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    start: 0,
    loading: false,
    type: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({ type: options.type });
    this.loadData(options.type);
    wx.setNavigationBarTitle({
        title: options.type,
        success: function(res) {
            // success
        }
    })
  },
  loadData(type) {
    let that = this;
    let { list } = this.data;
    wx.showLoading({
      title: "正在拼命加载中",
      mask: true
    });
    this.setData({
      loading: true
    });
    wx.request({
      url: `https://data.miaov.com/h5-view/v/movie/list/?tag=${type}`,
      data: {},
      method: "GET",
      success: function(res) {
        let data = res.data.subjects;
        list.push(...data);
        that.setData({
          list,
          start: that.data.start,
          loading: false
        });
        wx.hideLoading();
      },
      fail: function() {
        wx.hideLoading();
        that.setData({
          loading: false
        });
        wx.hideLoading();
        // fail
      },
      complete: function() {
        // complete
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  //scroll-view到底时触发事件
  lower: function() {
    if (!this.data.loading) {
      this.loadData(this.data.type);
    }
  },
  //
  tap(e) {
    let { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
      success: result => {},
      fail: () => {},
      complete: () => {}
    });
  }
});
