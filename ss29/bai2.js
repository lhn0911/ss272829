function long(a) {
    let longmax = a[0];

    for (let i = 1; i < a.length; i++) {
        if (a[i].length > longmax.length) {
            longmax = a[i];
        }
    }

    return longmax;
}
let mang = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"];
let along = long(mang);
console.log("Phần tử có độ dài lớn nhất trong mảng:", along);
