let tasks = [];
for(let i = 0;i<10;i++){
    tasks.push(new Task(i,"prepare"))
}
async function run(){
    try{
        for(let i = 0;i<tasks.length;i++){
            await Executor.executeTask(tasks[i]);
        }
        return new Promise((resolve, reject) => {
            resolve({status:"Все задачи выполнены"})
        })
    }catch (e) {
        return new Promise((resolve, reject) => {
            resolve({status:"Произошла ошибка.Задачи не завершены."})
        })
    }
}

let promise = run();
promise.then(result => {console.log(result.status)});
