//โปรแกรมสุ่มเลขบัญประชาชน

var num = Math.floor(Math.random() * Math.floor(3));
var num1 = Math.floor(Math.random() * Math.floor(3));
var num2 = Math.floor(Math.random() * Math.floor(9));
var num3 = Math.floor(Math.random() * Math.floor(9));
var num4 = Math.floor(Math.random() * Math.floor(9));
var num5 = Math.floor(Math.random() * Math.floor(9));
var num6 = Math.floor(Math.random() * Math.floor(9));
var num7 = Math.floor(Math.random() * Math.floor(9));
var num8 = Math.floor(Math.random() * Math.floor(9));
var num9 = Math.floor(Math.random() * Math.floor(9));
var num10 = Math.floor(Math.random() * Math.floor(9));
var num11 = Math.floor(Math.random() * Math.floor(9));
var num12 = Math.floor(Math.random() * Math.floor(1));

var x = num1 + "" + num2 + "" + num3 + "" + num4 + "" + num5 + "" + num6 + "" + num7 + "" + num8 + "" + num9 + "" + num10 + "" + num11 + "" + num12;

for (i = 0; i < 100; i++) {
    var result = +x;
    console.log(result);

}