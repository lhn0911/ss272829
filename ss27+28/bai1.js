let a=[1,2,3,4,5,6,7,8,9]
let nummax=a[0]
let nummin=a[0]
for(let i=1;i<a.length;i++){
    if(a[i]>nummax){
        nummax=a[i]
    }
    if(a[i]<nummin){
        nummin=a[i]
    }
}
console.log(nummax);
console.log(nummin);