var arr1=[1,2,3,4,5]
function mod(){
var arr2=[]
for(i=0;i<arr1.length;i++){
if(arr1[i]%2==0){
arr2.push(arr1[i]);
}
}
return arr2
}




console.log(arr1.map(mod))
//console.log(arr1.filter((e)=>e%2==0))


/*const filter(arr1,cond){
	const result=[];
	for(i=0;i<arr1.length;i++){
		const r=cond(arr1[i])
		if(r)
			*/
