
document.write("<h2>");
document.write("hello javascript~!");
document.write("</h2>");


// 칼라 구구단
//for(var i=2;i<=9;i++){
//	var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
//
//	for(var j=1;j<=9;j++){
//		document.write("<font color=\""+colorCode+"\">"+i + " * " + j +" = " + i*j + "<br/>");
//	}
//	document.write("</font><br/>");
//}
//


var t2 = new Date("2002,4,31");



document.write(t2+"<br/>");


var arrData = [1,true,"갑"];


arrData[3] = 100;
var t = arrData[3];
document.write(t);