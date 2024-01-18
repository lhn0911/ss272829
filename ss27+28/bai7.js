let a = prompt("Nhập vào một chuỗi: ");

let b = [];

for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        b.push(a.substring(i, j + 1));
    }
}
console.log("Kết quả:", b);