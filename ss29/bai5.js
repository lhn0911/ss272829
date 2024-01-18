function seach(a, b) {
    let chek = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].includes(b)) {
            chek.push(a[i]);
        }
    }
    return chek;
}
let a = ["abc", "xyz", "abcdef", "ghi", "xyz123"];
let c = prompt("Nhập vào một chuỗi: ");
let kq = seach(a, c);
if (kq.length > 0) {
    console.log("Các phần tử trong mảng chứa chuỗi '" + c + "':");
    console.log(kq);
} else {
    console.log("Không có phần tử nào trong mảng chứa chuỗi '" + c + "'.");
}
