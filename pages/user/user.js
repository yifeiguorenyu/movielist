// pages/user/user.js
Page({
  data: {
      detail:null,
      list:[]
  },
  onLoad: function(options) {
      
    
  },
  onGetUserInfo(e) {
   
    let { rawData } = e.detail;
    if (rawData) {
        this.setData({
            detail:JSON.parse(rawData)
        })
    }
  },
  onShow(){
    let that = this
    wx.getStorage({
        key: 'history',
        success: (result)=>{
            let {data} =result
            console.log(data)
            that.setData({
              list : [...data]
            })
           
        },
        fail: ()=>{},
        complete: ()=>{}
    });
  }
});
