Page({
  data: {
    imgUrls: [
      {
        link: '/pages/logs/logs',
        url: '/images/1111.jpg'
      }, {
        link: '/pages/logs1/logs1',
        url: '/images/v2-e767c70db8b60b9c83ffbcb0cdf5a0bf.jpg'
      }, {
        link: '/pages/logs2/logs2',
        url: '/images/v2-ef143e42808c9655a5d62dcf663c6685.jpg'
      },
      {
        link: '/pages/logs3/logs3',
        url: '/images/v2-c9bcbbc7f7b98fb88d1459389a22adf6.jpg'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 3000,  //间隔时间
    duration: 3000,  //滑动时间
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})