// import './index.less';


function App() {
  // body... 
}
App.prototype = {
  init: function() {
    // var me = this;
    $.ajax({
        url: "/api/js_demo/font.do",
        dataType: "json",
        type: "POST",
      })
      .done(function(data) {
        // *********************************************测试数据
        // var size = Math.floor(Math.random() * 200);
        // if (size < 60) {
        //   size = 60;
        // }
        // var color = Math.floor(Math.random() * 1000000);
        // *********************************************测试数据

        // CSS设置
        $('#demo').css({
          fontSize: data.size + "px",
          color: '#' + data.color
        });
        // 显示信息
        $('#info').html(`fontSize:${data.size}px; color:#${data.color}`);

        // 
        setTimeout(function(argument) {
          this.init();
        }.bind(this), 60000);

      }.bind(this));


  },
};


new App().init();