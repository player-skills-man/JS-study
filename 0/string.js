// 通常， JavaScript 字符串是原始值，可以使用字符创建： var firstName = "John"
// 但我们也可以使用 new 关键字将字符串定义为一个对象： var firstName = new String("John")

	// 不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用!!!
var x = "John";
var y = new String("John");
console.log(typeof(x)); // 返回 String
console.log(typeof(y)); // 返回 Object

var x = "John";
var y = new String("John");
console.log((x === y)) // 结果为 false，因为 x 是字符串，y 是对象