/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry", "high"));
tasks[0].markDone();

tasks.push (new ToDoList.HobbyTask("practice origami."));
tasks.push (new ToDoList.HobbyTask("Bake pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay .setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "high", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting", "medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling", "low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for(var task of thorTasks) {
  console.log(task);
}

console.log(tasks);
var typeHomeTasks = ToDoList.describeTasksForType("HomeTask", tasks);
console.log(typeHomeTasks);
console.log("Here are the tasks for HomeTask");
for(var task of typeHomeTasks) {
  console.log(task);
}

var typeHobbyTasks = ToDoList.describeTasksForType("HobbyTask", tasks);
console.log(typeHobbyTasks);
console.log("Here are the tasks for HobbyTask");
for(var task of typeHobbyTasks) {
  console.log(task);
}


var typeWorkTasks = ToDoList.describeTasksForType("WorkTask", tasks);
console.log(typeWorkTasks);
console.log("Here are the tasks for WorkTask");
for(var task of typeWorkTasks) {
  console.log(task);
}
