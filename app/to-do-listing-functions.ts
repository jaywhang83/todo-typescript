/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeTasksForType = function(taskType: string, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {

      if(task.constructor.name === taskType) {
        console.log("Here" + task.toString());
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
