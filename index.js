let tasks = [];
/*for(let i = 0;i<10;i++){
    tasks.push(new Task(i,"prepare"))
}*/
tasks.push(new Task(0,"prepare"))
tasks.push(new Task(1,"prepare"))
tasks.push(new Task(2,"prepare"))
tasks.push(new Task(3,"prepare"))
tasks.push(new Task(4,"prepare"))
tasks.push(new Task(5,"prepare"))



async function runTask(queue, maxThreads = 0){
    console.log("==runTask==");
    let tsks = [];
    let countTreads = maxThreads<=0 ? queue.length : maxThreads;
    for(let i = 0;i<countTreads;i++){
        tsks.push(Executor.executeTask(queue[i]));
    }
    return Promise.all(tsks);
}


let promise = runTask(tasks,2);
promise.then(data => {
    console.log("Выполненные задачи : [");
        data.map(task => {
            console.log("{targetId:"+task.targetId+", action:"+task.action+"}");
        })
    console.log("]");
})