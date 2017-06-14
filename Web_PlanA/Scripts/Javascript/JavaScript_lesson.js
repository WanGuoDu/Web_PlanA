var BodyObject=getViewport();
var ClientWidth=BodyObject.width;
var ClientHeight=BodyObject.height;
console.log("width:"+ClientWidth+";height:"+ClientHeight);
function getViewport(){
    if (document.compatMode == "BackCompat"){
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}
function getPagearea(){
    if (document.compatMode == "BackCompat"){
        return {
            width: Math.max(document.body.scrollWidth,
            document.body.clientWidth),
            height: Math.max(document.body.scrollHeight,
            document.body.clientHeight)
        }
    } else {
        return {
            width: Math.max(document.documentElement.scrollWidth,
            document.documentElement.clientWidth),
            height: Math.max(document.documentElement.scrollHeight,
            document.documentElement.clientHeight)
        }
    }
}
/*ES6新增Map Set*/
var m=new Map([["Tom",98],["Bob",58],["Susan",69]]);
console.log(m.get("Tom"));
m.set("Jim",89);
m.delete("Tom");
for (var ms of m) {
    console.log(ms);
};
var s=new Set();
    /*循环读取数组*/
for (var i in m) {
   console.log(i);  
};
var array=['a','b','c'];
array.name="不晓得叫啥名字";
    //for in 实际遍历的是对象的属性名称
for (var arr in array) {
    console.log(arr.value);
};
console.log("=========================================")
for (var arr1 of array) {
    console.log(arr1);
};
console.log("===========================================")
console.log("this指向随着调用它的对象的改变而改变,无调用对象时直接指向Window");
var xiaoming1 = {
    name: '小明',
    birth: 1990,
    age: function () {// 在方法内部一开始就捕获this
        return function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth; // 用that而不是this
}
}
};
console.log(xiaoming1.age()());
console.log("此时返回的是getAgeFromBirth=》xiaoming1.age() xiaoming1.age()()=》getAgeFromBirth(),所以没有具体调用的对象，this直接指向window this.birth=undefined");
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        return function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }ctx.getImageData(X, Y, WIDTH, HEIGHT);
    }
};
console.log(xiaoming.age());
console.log("=======================改变this指向=========================")
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        return function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth; // 用that而不是this
        }
    }
};
console.log("指定函数的this指向哪个对象,可以用函数本身的apply方法,接收两个参数：需要绑定this的对象，函数本身的参数");
var getAge=xiaoming.age();
console.log(getAge.apply(xiaoming,[]));