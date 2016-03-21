/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description + " " + task.priority);
      }
    }
    return descriptions;
  }

  export var describeTasksForType = function(taskType: string, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.constructor.name === taskType) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeTasksForPriority = function(taskPriority: string, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.priority === taskPriority) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
  export var describeTasksPriorityHigh = function(assignee: IPerson, taskPriority: string, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.assignedTo === assignee && task.priority === taskPriority) {
        descriptions.push(task.description + " " + task.priority);
      }
    }
    return descriptions;
  }
}
