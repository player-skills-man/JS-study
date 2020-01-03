// JavaScript 对象
// 对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：

var person={firstname:"John", lastname:"Doe", id:5566};
// 上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id。
// 空格和折行无关紧要。声明可横跨多行：

var person2={
firstname : "John",
lastname  : "Doe",
id        :  5566
};
// 对象属性有两种寻址方式：
name=person2.lastname;
name=person2["lastname"];

var person3 = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    //对象的方法 -使用方法：name = person3.fullName();
    fullName : function()
	{
       return this.firstName + " " + this.lastName;
    }
};