var voice = "";
Page({
  play: function () {
    //播放声音文件  
    wx.playVoice({
      filePath: voice
    })
  },
  start: function () {
    //开始录音  
    wx.startRecord({
      success: function (e) {
        voice = e.tempFilePath
      }
    })
  }, 
  stop: function () {
    //结束录音  
    wx.stopRecord();
  },
  
  
  data: {
    motto: "" ,
    imgUrls: [{}]
  },
  
  formSubmit: function (e) {
    var userName = e.detail.value.userName;
    this.setData({

      userName: userName,

      
    })
    console.log(userName)
    if(userName=="春丽"){
      this.setData({
        imgUrls: [{
          link: '/pages/erweima/erweima'}]})
    }
   
    },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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