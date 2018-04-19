//admin.js
//获取应用实例
const app = getApp()

Page({
  data: {
   primarySize:5,
   plain:false,
   loading:false,
   disabled:true,
   admin_name:"",
   admin_password:""
  },
  nameInput:function(event){
    console.log(event.detail.value);
    var name=this.data.admin_name;
    name=event.detail.value;
    this.setData({admin_name:name});
    if(!(name.length==8)){
      wx.showToast({
        title:"请输入8位数字的用户名!",
        icon:"success",
        duration:2000
      })
    }
  },
  passwordInput:function(event){
    console.log(event.detail.value);
    var password = this.data.admin_password;
    password = event.detail.value;
    this.setData({ admin_password: password });
    if(password.length==0){
      wx.showToast({
        title: '密码不能为空',
        duration:2000
      })
    }
    else{
      this.setData({ disabled:false});
    }
  },
  onLoad: function () {
    console.log("admin onload");
    
  },
  login:function(){

    console.log(this.data.admin_name+":"+this.data.admin_password)
    //设置登录
    var loginstatus = app.globalData.loginstatus;//改变登录状态
    loginstatus=true;
    app.globalData.loginstatus=loginstatus;
    app.globalData.loginname = this.data.admin_name;//设置登录名
    app.globalData.loginid=0;//设置登录id
    wx.redirectTo({
      url: '../index/index',
    })
  }
})
