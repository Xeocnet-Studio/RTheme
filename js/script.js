const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

// 上面的是用于目录的，下面的用于更新CopyRight

Date.prototype.format = function (fmt) {
    var o = {};
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    return fmt;
}
var now = new Date();
var nowStr = now.format("yyyy");
document.getElementById("year").innerHTML = new Date().format("yyyy");

// Baidu Statistics

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2463b16e471159a3c49025a4bb3f2ba2";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
