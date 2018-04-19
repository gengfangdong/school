//publish.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  
  onLoad: function () {
    console.log("home onload");
    var loginstatus = app.globalData.loginstatus;
    if (loginstatus == true) {
      app.editTabBar2();
      this.setData({ students: '耿方栋' });
    }
    else {
      app.editTabBar();
    }
  },
  
})
