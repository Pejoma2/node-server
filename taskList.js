//const add = require("./addTask");


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
    console.log("5. Remove ALL Task");
    console.log("6. Exit");

    communicator.question("Choose from the menu: ", async (option) =>{
        switch(option){
            case "1":
                try{
                  await addTask();
                } catch(error){
                    console.error(error);
                }
                showMenu();
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
                RemoveALLTask();
                break;
            
            case "6":
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


//-0- function AskQuestion

function AskQuestion(question){
    return new Promise((resolve) => {
        communicator.question(question, (response) => {
            resolve(response);
        });
    });
}

//-1- Add task function

async function addTask() {
    const name = await AskQuestion("Add a task name: ");
    const description = await AskQuestion("Add a task description: ");
    const dueDate = await AskQuestion("Add a task due date (YYYY-MM-DD): ");
            

            return new Promise((res, rej) => {
                setTimeout(() => {
                    if (!tasks.find((t) => t.name == name)) {
                        let task = {
                            id: taskId,
                            name: name,
                            dueDate: dueDate,
                            description: description,
                            completed: false,
                        };
            
                        tasks.push(task);
                        taskId ++;
                        console.log("task added");
                        
                        res();

                    }else{
                        rej("Error, Task addition failed (name already exist)")
                    }
                 }, 2000)
                })   
    };
    




//-2- Remove task function

function removeTask() {
    communicator.question("Enter the ID of the task you want to REMOVE: ", (taskId) =>{
        let taskIndex = tasks.findIndex(task => task.id === parseInt(taskId));
        if(taskIndex !== -1) {
            new Promise((resolve) =>{
            setTimeout(() => {
                resolve(tasks.splice(taskIndex, 1));
            }, 2000);
            })
            .then(() => {
                console.log("Task Removed.");
                showMenu();
              })
        }
        else{
            console.log("Can´t find the ID")
            showMenu();
        }

        
    }
)};



//-3- complete task function

function completeTask() {
    communicator.question("Enter the ID of the completed task: ", (taskId) =>{
        let task = tasks.find(task => task.id === parseInt(taskId));

        if(task) {
            new Promise((resolve) =>{
                setTimeout(() => {
                    resolve(task.completed = true);
                }, 2000);
            })
            
            .then(console.log("Task Completed"));
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


//-5- ShowTaskList function Remove ALL Task

function RemoveALLTask(){
    tasks = [];
    showMenu();
}