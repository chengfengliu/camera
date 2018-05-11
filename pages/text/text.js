Page({
  onLoad() {
    var app = getApp();
    this.setData({
      src: app.globalData.src,
      time: app.globalData.time
    });
  },
  data: {
    src: '',
    time: ''
  }
})