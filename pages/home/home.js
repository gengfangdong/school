//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectschools:'请选择所在学校:',
    feedback:'没有所在的学校，请点击反馈详情',
    motto: 'Hello World',
    admin_login:"校园管理登录",
    schoollist:[],
    userInfo: {},
    loading:false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //登录跳转
  adminTap:function(){
    wx.navigateTo({
      url: '../admin/admin',
      success:function(){
        console.log("admin login跳转成功!");
      },
      fail:function(){
        console.log("admin login跳转失败!");
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.redirectTo({
      url: '../logs/logs'
    })
  },
  //获取学校列表的函数，参数limit from to 
  getSchoollist:function(from,to){
    this.setData({ loading: true })
    console.log(from+":"+to)
    var list=this.data.schoollist
    list.push({id:0,title:"河北师范大学"})
    this.setData({schoollist:list})
    console.log(list)
  },
  onLoad: function () {
    console.log("home onload");
    this.getSchoollist(0,1)
  },
  
})
