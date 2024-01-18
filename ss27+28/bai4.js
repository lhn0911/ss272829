let a=[1,2,3,4,5,6,7,8,9,10]
let b=[]
let c=[]
for(let i=0;i<a.length;i++){
    if(i%2==0){
        b.push(i)
    }
    if(i%2!=0){
        c.push(i)
    }
}
console.log('mảng số chẵn '+b);
console.log('mảng số lẻ '+c);