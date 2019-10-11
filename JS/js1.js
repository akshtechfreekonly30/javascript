var arr1=[10,20,30,40]

function mapop(arr1,operation){
var arr2=[]

for(i=0;i<arr1.length;i++){
var res=operation(arr1[i])
arr2.push(res)
}
return arr2;
}

const square=(a)=>a*a;
//console.log(mapop(arr1,square))
const cube=(a)=>a*a*a;
console.log(mapop(arr1,cube))
