// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: '1',
        englishName:'Cat',
        chineseName:'猫',
        englishAbbreviation:'/kæt/',
        description:'',
        audio:'',
        banner:'https://cxi365.oss-cn-shenzhen.aliyuncs.com/paper/typeIcon/4.jpg',
      },
      {
        id:'2',
        title:'狗',
        description:'',
        audio:'',
        banner:'https://cxi365.oss-cn-shenzhen.aliyuncs.com/paper/typeIcon/4.jpg',
      },
      {
        id:'3',
        title:'狼',
        description:'',
        audio:'',
         banner:'https://cxi365.oss-cn-shenzhen.aliyuncs.com/paper/typeIcon/4.jpg',
      },
      {
        id:'4',
        title:'猪',
        description:'',
        audio:'',
         banner:'https://cxi365.oss-cn-shenzhen.aliyuncs.com/paper/typeIcon/4.jpg',
      },
      {
        id:'5',
        title:'猴子',
        description:'',
        audio:'',
         banner:'https://cxi365.oss-cn-shenzhen.aliyuncs.com/paper/typeIcon/4.jpg',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onload(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const currentPage = getCurrentPages().pop();

    // 获取传递过来的参数
    const options = currentPage.options;

    const id = options.id;

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})