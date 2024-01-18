function ktra(a) {
    let b=0
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== ' ') {
            b++;
        }
    }
    return b;
}
let c= prompt("Nhập chuỗi bất kì")
let ketQua = ktra(c);
console.log("Số ký tự trong chuỗi là: " + ketQua);
