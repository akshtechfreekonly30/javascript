const getData=(url)=>{
const task=(success,failure)=>{
fetch(url).then(r=>{r.json().then(b=>success(b)).catch(err=>failure(err))})
.catch(err=>failure(err))
}
return new Promise(task);
}

getData("https://jsonplaceholder.typicode.com/todos/1").then(b=>console.log(b)).catch(err=>console.log(err))






























































