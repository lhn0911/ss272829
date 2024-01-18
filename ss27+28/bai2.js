let a=+prompt('Nhập a')
let b=+prompt('Nhập b')
let c=[]
if(a>b){
    [a,b]=[b,a]
}
for(let i=a+1;i<b;i++){
    c.push(i)
}
console.log(`các số từ ${a} đến ${b} là:`+c)