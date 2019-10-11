const url="https://jsonplaceholder.typicode.com/todos/1"

const mainPromise = fetch(url)
mainPromise.then((responce)=>{
p=responce.json()
	p.then((body)=>{
		console.log("body found",body)
}).catch(()=>{
	console.log("failed to deserialize body")
})

}).catch((err)=>{
	console.log("failed to fetch data",err)

})
