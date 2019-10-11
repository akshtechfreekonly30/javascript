/*fetch("https://jsonplaceholder.typicode.com/posts",{
	body:JSON.stringify({
	title:'pooja',
	body:'123',
	userId:1
}
),
headers:{
	"Content-type":"application/type"
},
method:"post"
}).then((response)=>{
	response.json().then((b)=>{
	console.log(b)	
}).catch((err)=>{
	console.log(err)
})
}).catch((err)=>{
	console.log(err)
})
*/


const postdata=(url)=>{
const task=(success,failure)=>{
meta={
	body:JSON.stringify({
	title:'pooja',
	body:'123',
	userId:1
}
),
headers:{
	"Content-type":"application/type"
},
method:"post"
}
fetch(url,meta).then(r=>{r.json().then(b=>success(b)).catch(err=>failure(err))})
.catch(err=>failure(err))
}
return new Promise(task);
}

postdata("https://jsonplaceholder.typicode.com/posts").then(b=>console.log(b)).catch(err=>console.log(err))







