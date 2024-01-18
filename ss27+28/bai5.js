let a = [3, 5, 2, 7, 3, 8, 5, 9];
let b = [];
let ktra = false;
for (let i = 0; i < a.length; i++) {
    let temp = a[i];
    b[temp] = (b[temp] || 0) + 1;
}
for (let i = 0; i < a.length; i++) {
    let temp = a[i];
    if (b[temp] === 1) {
        console.log("Phần tử đầu tiên độc nhất:", temp);
        ktra = true;
        break;
    }
}
if (!ktra) {
    console.log("Không có phần tử độc nhất trong mảng.");
}
