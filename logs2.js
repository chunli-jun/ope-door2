var app = getApp()
Page({
  data: {
  },
  //播放
  listenerButtonPlay: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://music.163.com/song/media/outer/url?id=208889.mp3',
      title: '别找我麻烦',
      //图片地址地址
      coverImgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577001986233&di=e95ce317946afa065fceb45a970e3ddc&imgtype=0&src=http%3A%2F%2Fp4.music.126.net%2FaflV-_vX3jlIQYp1MFElhg%3D%3D%2F109951162922303292.jpg'

    })
  },
  //监听button暂停按钮
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio({
    });
    console.log('暂停播放')
  },
  /**
   * 播放状态
   */
  listenerButtonGetPlayState: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        // success
        //duration  选定音频的长度（单位：s），只有在当前有音乐播放时返回
        console.log('duration:' + res.duration)
        console.log('currentPosition:' + res.currentPosition)
        //status    播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
        console.log('status:' + res.status)
        console.log('downloadPercent:' + res.downloadPercent)
        //dataUrl   歌曲数据链接，只有在当前有音乐播放时返回 
        console.log('dataUrl:' + res.dataUrl)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 设置进度
   */
  listenerButtonSeek: function () {
    wx.seekBackgroundAudio({
      position: 40
    })
  },
  /**
   * 停止播放
   */
  listenerButtonStop: function () {
    wx.stopBackgroundAudio({
    })
    console.log('停止播放')
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    /** 
     * 监听音乐播放 
     */
    wx.onBackgroundAudioPlay(function () {
      // callback
      console.log('onBackgroundAudioPlay')
    })
    /**
     * 监听音乐暂停
     */
    wx.onBackgroundAudioPause(function () {
      // callback
      console.log('onBackgroundAudioPause')
    })
    /**
     * 监听音乐停止
     */
    wx.onBackgroundAudioStop(function () {
      // callback
      console.log('onBackgroundAudioStop')
    })
  }
})
