// // alert(1)
// // toàn bộ html được load thì code bên trong mới chạy
// window.onload = function() {
	
// // lấy thẻ button có id là id4 và gán vào biến buttonTag
// // 
// var buttonTag = document.getElementById("id4");

// 	// khi click vào nút mà biến buttonTag đang chứa giá trị
// 	// thì sẽ chạy code bên trong function
// 	// nếu không click vào nút nó không chạy code bên trong
// 	buttonTag.onclick = function() {
// 		// lấy thẻ input có id là id1 gán vào biến aNumber
// 		var aNumber = document.getElementById("id1");

// 		// lấy thẻ input có id là id2 gán vào biến bNumber
// 		var bNumber = document.getElementById("id2");

// // lấy giá trị của thẻ input 
// var aNumberValue = aNumber.value;
// //alert(aNumberValue);

// // lấy giá trị của thẻ input 
// var bNumberValue = bNumber.value;
// //alert(bNumberValue);
// //Number là chuyển đối chuổi thành số (hàm này có sẳn trong javascript)

// var sum = Number(aNumberValue) +  Number(bNumberValue);
// // alert(sum);

// var result = document.getElementById("id3");

// // cập nhật giá trị của sum vào nội dung của thẻ span
// result.innerHTML = sum;


// }

// }

var buttonTag = document.getElementById("id4");
buttonTag.onclick = function() {
	var aNumber = document.getElementById("id1").value;
	var bNumber = document.getElementById("id2").value;
	var sum = Number(aNumber) + Number(bNumber);
	var result = document.getElementById("id3");
	result.innerHTML = sum;
}
