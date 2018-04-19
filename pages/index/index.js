//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    welcom:'欢迎',
    schoolname:'学校名称',
    schoolid:0,
    students:'的同学',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //动态设置导航栏

  //加载home传递过来的参数
  onLoad: function (id) {
    var loginstatus = app.globalData.loginstatus;
    if(loginstatus==true){
      app.editTabBar2();
      this.setData({ students: '耿方栋' });
    }
    else{
      app.editTabBar();
    }
    console.log("index onload");
    console.log(id);
    var scid = this.data.schoolid;
    scid=id;
    this.setData({schoolid:scid});
    this.setData({ schoolname:'河北师范大学'});
    
  }
})
