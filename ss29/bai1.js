function ktra(num){
    if(num%2==0){
        return "Chẵn";
    }else{
        return "lẻ";
    }
}
let num1=+prompt("Nhập số thứ nhất")
let num2=+prompt("Nhập số thứ hai")
let num3=+prompt("Nhập số thứ ba")
console.log(`Số ${num1} là số ${ktra(num1)}`)
console.log(`Số ${num2} là số ${ktra(num2)}`)
console.log(`Số ${num3} là số ${ktra(num3)}`)