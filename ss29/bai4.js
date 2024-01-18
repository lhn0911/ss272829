function ktra(a, kt) {
    let dem = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === kt) {
            dem++;
        }
    }

    return dem;
}
let b = prompt("Nhập vào một chuỗi: ");
let c = prompt("Nhập vào một ký tự: ");
let kq = ktra(b, c);
console.log(`Số lần xuất hiện của ký tự "${c}" trong chuỗi là: ${kq}`);
