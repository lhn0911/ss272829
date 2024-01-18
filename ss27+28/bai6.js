let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = [];

for (let i = 0; a.length > 0; i++) {
    const numrandom = Math.floor(Math.random() * a.length);
    const num = a.splice(numrandom, 1)[0];
    b[i] = num;
}

console.log(`mảng được tạo ra nhiên từ mảng ban đầu là: b=[${b}]`);
