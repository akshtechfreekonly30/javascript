///promise program #success
const task=(success,failure)=>{
	console.log("Performing some certain task")
	console.log("Searching for mobile no")
	setTimeout(()=>{
	console.log("Task suceeded")
	const result=1234567
	success(result)
	},1000)
	failure(result)
	}

const mypromise=new Promise(task)
const successCallback=(result)=>{
	console.log("Found mobile no",result)
	console.log("Calling that no")
	}

const failureCallback=(result)=>{
	console.log("Failed to perform task",result)
	console.log("Doing another work")
	}
mypromise.then(successCallback).catch(failureCallback)
console.log("Assigned task and performing my work")


/*const task=(success,failure)=>{
	console.log("Performing some certain task")
	console.log("Searching for mobile no")
	setTimeout(()=>{
	console.log("Task failed")
	const result=1234567
	failure(result)
	},1000)
	}

const mypromise=new Promise(task)
const successCallback=(result)=>{
	console.log("Found mobile no",result)
	console.log("Calling that no")
	}

const failureCallback=(result)=>{
	console.log("Failed to perform task",result)
	console.log("Doing another work")
	}
mypromise.then(successCallback).catch(failureCallback)
console.log("Assigned task and performing my work")*/
