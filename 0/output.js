// JavaScript 可以通过不同的方式来输出数据：
//
// 使用 window.alert() 弹出警告框。
// 使用 document.write() 方法将内容写到 HTML 文档中。
// 使用 innerHTML 写入到 HTML 元素。
// 使用 console.log() 写入到浏览器的控制台。

// 注意代码的执行顺序，在html中，导入js文件的位置就是js代码执行的时间.
// 所以，如果js要更改html页面元素内容，那么必须在最后加入<script src="output.js"></script>
// 否则，js代码是找不到想要更改的元素的。

// js代码从上往下执行，遇到错误就停止。

window.alert("hello 1");
document.write("hello 2");
document.getElementById("demo").innerHTML = "hello 3";
console.log("hello 4");

