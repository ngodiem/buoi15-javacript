//variable - biến
// a là tên biến(hợp được) dùng để chứa dữ liệu(giá trị)
// a có giá trị là 5
// tên biến là do mình chủ động đặt
var a = 5;
// cập nhật giá trị của biến a
// những gì cần cập nhật nằm bên trái dấu =
// biến là giá trị thay đổi theo thời gian
a = 10;  
//hiển thị giá trị biến a
// alert(a);
console.log(a);
// khai báo hằng 
//const - constant - hắng số
// giá trị không thay đổi theo thời gian
const PI = 3.15;
//PI = 3.16; // sai là kết thúc javascript, code phía dưới lỗi không chạy được nữa
console.log(PI);
// document.write(PI); // hiển thị giá trị trong thẻ 
//window.onload có nghĩa là toàn bộ code html được load thì code bên trong mới chạy
window.onload = function(){
	// innerHTML truy cập vào phần nội dung của thẻ. gán giá trị 5 cho nội dung của thẻ
document.getElementById("cart").innerHTML = "5";

console.log(document.getElementById("cart").innerHTML);
}
// b có giá trị là 7
// b có kiểu dữ liệu là số
var b = 7;
console.log(b);

// c có giá trị là hello
// c có kiểu dữ liệu là chuỗi là dấu nháy đơn hoặc đôi
var c = "hello";
console.log(c);
// d có giá trị là true
// d có kiểu dữ liệu là boolean
// kiểu boolean có 2 giá trị là true và fase

var d = true;
console.log(d);

// e có giá trị là [4, 5, 2, 7]
// e có kiểu dữ liệu là array - mảng (danh sách)
// đặc điểm của array là dấu []
// định nghĩa array: là tập hợp các phần tử có thứ tự (tính từ trái qua phải)
// các phần tử cách nhau bởi dấu , 
//phàn tử gồm 2 phân chỉ số và giá trị
// chỉ số bắt đầu là 0 ở phần tử đầu tiên và tăng dần từ trái qua phải
var e = [4, 5, 2, 7];
// lấy giá trị của phần tử thì dựa vào chỉ số
// lấy giá trị của phần tử thứ 2 có giá trị là 5
// chỉ số lớn nhất = số phần tử - 1
console.log(e[1]);


// 0bject: đối tượng 
// biến sv có kiểu dữ liệu là đối tượng
// đặc điểm của đối tượng là dấu {}
// đối tượng bao gồm nhiều thuộc tính, các thuộc tính cách nhau bởi dấu, 
// thuộc tính bao gồm 2 phần tên thuộc tính và giá trị thuộc tính
var sv = {masv: 258, tên: "nguyễn văn A", gioitinh: "nam"};

// cách 1 truy  xuất giá trị của thuộc tính theo cú pháp tenbien.tenthuoctinh
console.log(sv.masv);

sv.masv = 259;
console.log(sv.masv);

// cách 2: truy xuất giá trị của thuộc tính theo cú pháp  tenbien["tenthuoctinh"]
console.log(sv["masv"]);

sv["masv"] = 260;
// cập nhật
console.log(sv["masv"]);

// undefined
var f;
console.log(f);

// toán tử số học
// bên phải dấu = phải thực hiện trước rồi mới gán giá trị tính được qua bên trái
// dấu cộng có 2 chức năng: cộng só học và nối chuỗi tùy vào kiểu dữ liệu của toán hạng()

var g = 4 + 5; 
console.log(g);

var a1 = "4" + "5"; // tồn tại 1 cách chuỗi là ra chuỗi
console.log(a1);

// chia lấy dư
var a2 = 11 % 4; // chia lấy dư
console.log(a2);

// toán tử luận lý (true/false)
// quan tâm 3 toán tử:
//! ngược lại (not)
// || hoặc
//&& và (and)

var a3 = true || false || false || true; // tồn tại 1 cái true ra true
console.log(a3);

var a4 = true && false && false && true; // tồn tại 1 cái flase ra false
console.log(a4);

var a5 = (true || false) && (false || true); // true and true ra true
console.log(a5);


// toán tử so sánh: >, >=, <, <=, ==, !=, ===
 var a6 = 5 > 7 ;
 console.log(a6);

 var a7 = 5 <= 6; // (5<6) ||  (5==6)
 console.log(a7); // true


 var a8 = 5 !=6;
 console.log(a8); // true

 var a9 = "1" == 1; // so sánh kiểu dữ liệu trước rồi so sánh giá trị 1 trong 2 bằng nhau là bằng nhau 
 console.log(a9); // true

 var a17 = "1" == 2;
 console.log(a17);

  var a10 = "1" === 1; //  check dữ liệu trước(không bằng nhau thì dừng lại ngay) rồi mới so sánh tới giá trị
 console.log(a10); // false

  var a11 = 5 == 9; // so sánh 5 = 9 có kiểu diễu liệu bằng nhau 
 console.log(a11); // true

 if (4 < 6) {
 	console.log("4 < 6 ");
 }

if (5 >= 9) { // (5 > 9)f || (5 = 9) f ==> f  dòng bên dưới chạy
	console.log("5 >= 9");
}
else {
	console.log("5 < 9")
}

// học vế switch là tìm giá trị trùng với case tương ướng và chạy case đó
// break không được dùng cho if: break dùng cho vòng lặp for, switch
var today = "tue"
switch (today) {
	case "mon":
		console.log("hôm nay là thứ 2");
		break;

	case "tue":
		console.log("hôm nay là thứ 3");
		break;	// là thoát khỏi switch (k có break có khả năng chạy code của case khác)
	case "wed":
		console.log("hôm nay là thứ 4");
		break;	
	default:
		console.log("hôm nay là thứ 4");
		break;
}

// khi nào sài switch case(code rỏ hơn) sữ dụng cho dữ liệu rời rạc (vd: giữ mon day và tue day k có ngày nào khác)
// if esle(code rỏ ràng) sử dụng cho dữ liệu liên tục(vd: 2 và 3 có 2,5 giữa 2 số điều có 1 số )

// vd dùng if esle dữ liệu liên tục
// code bên dưới khó để chuyển đổi sang switch case
var x = 3;
if(x <10)
{
	console.log("A");
}
else {
console.log("B");
}




