class Executor {
    static tasks = {};

    static async executeTask(_task){
        if( Executor.tasks[_task.targetId] == "work") throw new Error("Нельзя выполнять одновременно задачу с одним и темже ID");
        Executor.tasks[_task.targetId] = 'work';
        return new Promise((resolve, reject) => {
            var newImg = new Image;
            newImg.onload = function() {
                if(_task.action=='init' || _task.action=='prepare' || _task.action== 'work' || _task.action=='finalize' || _task.action=='cleanup'){
                    Executor.tasks[_task.targetId] = undefined;
                    resolve(_task);
                }
                else reject(_task);
            }
            newImg.src = 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg';


            /*window.setTimeout(() => {
                if(_task.action=='init' || _task.action=='prepare' || _task.action== 'work' || _task.action=='finalize' || _task.action=='cleanup'){
                    Executor.tasks[_task.targetId] = undefined;
                    resolve(_task);
                }
                else reject(_task);
            }, 1000);*/
        });
    }

}