//study.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    console.log("study onload");
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
