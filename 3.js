let Tasks = [];

let addTasks = (tasks)=>{
    Tasks.push(tasks);
    console.log(task +"has been added to my Tasks" );
    return Tasks.length;
}

let listAllTasks = ()=>{
Tasks.forEach((element)=>{
    console.log(element);

})

}

let deleteTask = ()=>{
    let index = Tasks.indexOf(task);
    if(index > -1){
        Tasks.splice(index,1);
        console.log(task+" hasbeen deleted from my Tasks.")
    }else{
        console.log(task+" not found in array.");
    }
    return Tasks.length
    }

addTasks("Work");
addTasks("Eat");
addTasks("Sleep");
listAllTasks();
deleteTask("Work");




   // })

   // d. let index = Tasks.indexOf(task)
   // Tasks.splice(index,1);