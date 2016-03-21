/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High", people.loki));
tasks[0].markDone();

tasks.push (new ToDoList.HobbyTask("practice origami."));
tasks.push (new ToDoList.HobbyTask("Bake pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay .setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(today, "Kick Loki's Butt!.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(today, "Kick Thor's Butt!.", "High", people.loki));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean toilet.", "High", people.loki));

console.log(tasks);

var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for(var task of thorTasks) {
  console.log(task);
}

var priorityHighestForThor = ToDoList.describeTasksPriorityHigh(people.thor, "High", tasks);
console.log(priorityHighestForThor);
console.log("Here is the first high priority task for Thor");
console.log(priorityHighestForThor[0]);

var priorityHighestForDiane = ToDoList.describeTasksPriorityHigh(people.diane, "High", tasks);
console.log(priorityHighestForDiane);
console.log("Here is the first high priority task for Diane");
console.log(priorityHighestForDiane[0]);

var priorityHighestForLoki = ToDoList.describeTasksPriorityHigh(people.loki, "High", tasks);
console.log(priorityHighestForLoki);
console.log("Here is the first high priority task for Loki");
console.log(priorityHighestForLoki[0]);

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

var priorityHigh = ToDoList.describeTasksForPriority("High", tasks);
console.log("Here are tasks with a High priority:");
for(var task of priorityHigh) {
  console.log(task);
}

var priorityMedium = ToDoList.describeTasksForPriority("Medium", tasks);
console.log("Here are tasks with a Medium priority:");
for(var task of priorityMedium) {
  console.log(task);
}

var priorityLow = ToDoList.describeTasksForPriority("Low", tasks);
console.log("Here are tasks with a Low priority:");
for(var task of priorityLow) {
  console.log(task);
}
