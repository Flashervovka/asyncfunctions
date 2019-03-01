class Executor {
    static tasks = {};

    static async executeTask(_task){
        if( Executor.tasks[_task.targetId] == "work") throw new Error("Нельзя выполнять одновременно задачу с одним и темже ID");
        Executor.tasks[_task.targetId] = 'work';
        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                if(_task.action=='init' || _task.action=='prepare' || _task.action== 'work' || _task.action=='finalize' || _task.action=='cleanup'){
                    Executor.tasks[_task.targetId] = undefined;
                    resolve(_task);
                }
                else reject(_task);
            }, 1000);
        });
    }

}