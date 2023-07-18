
const readline = require("readline");


//interface for reading user inputs
let communicator = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

showMenu();


//menu function

function showMenu(){
    console.log("|-----------------------------------------------|TASKLIST|-----------------------------------------------|");
    console.log("1. Add task");
    console.log("2. Remove task");
    console.log("3. Completed task");
    console.log("4. Show task list");
    console.log("5. Exit");

    communicator.question("Choose from the menu: ", (option) =>{
        switch(option){
            case "1":
                addTask();
                break;
            
            case "2":
                removeTask();
                break;
            
            case "3":
                completeTask();
                break;
            
            case "4":
                showTaskList();
                break;
            
            case "5":
                communicator.close();
                break;

            default:
                console.log("Invalid option.")
                showMenu();
                break;
        }
    })
}



let taskId = 1;
let tasks = [];



//-1- Add task function

function addTask() {
    communicator.question("Add a task name: ", (name) =>{
        communicator.question("Add a task description: ", (description) =>{
            let task = {
                id: taskId,
                name: name,
                description: description,
                completed: false,
            };

            tasks.push(task);
            console.log("task added");
            taskId ++;
            showMenu();
        });
    });

}


//-2- Remove task function

function removeTask() {
    communicator.question("Enter the ID of the task upu want to REMOVE: ", (taskId) =>{
        let taskIndex = tasks.findIndex(task => task.id === parseInt(taskId));
        if(taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            console.log("Task Removed.");
        }else{
            console.log("Can´t find the ID")
        }

        showMenu();
    }
)};



//-3- complete task function

function completeTask() {
    communicator.question("Enter the ID of the completed task: ", (taskId) =>{
        let task = tasks.find(task => task.id === parseInt(taskId));

        if(task) {
            task.completed = true;
            console.log("Task Completed");
        } else {
            console.log("Can´t find the ID");
        }

        showMenu();

        
    });
}



//-4- ShowTaskList function

function showTaskList(){
    console.log(tasks);
    showMenu();
}