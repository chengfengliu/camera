Page({
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    var app = getApp();//取得全局App({..})实例
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        app.globalData.src = res.tempImagePath
        app.globalData.time = new Date()
      }
    })
    wx.navigateTo({
      url: '/pages/text/text',
    })
  },
  error(e) {
    console.log(e.detail)
  }
})