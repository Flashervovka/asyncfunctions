class Executor {

    static async executeTask(_task){
        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                if(_task.action=='init' || _task.action=='prepare' || _task.action== 'work' || _task.action=='finalize' || _task.action=='cleanup')resolve(_task);
                else reject(_task);
            }, 100);
        });
    }

}