/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-create-tasks.ts" />
module ToDoList {

  $(document).ready(function() {
    var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
    for(var task of thorTasks){
      $(".thor").append("<ul><li>" + task + "</li></ul>");
    }

    var priorityHighestForThor = ToDoList.describeTasksPriorityHigh(people.thor, "High", tasks);
      $(".thor-high-pri").append("<ul><li>" + priorityHighestForThor[0] + "</li></ul>");


    var priorityHighestForDiane = ToDoList.describeTasksPriorityHigh(people.diane, "High", tasks);
      $(".diane-high-pri").append("<ul><li>" + priorityHighestForDiane[0] + "</li></ul>");


    var priorityHighestForLoki = ToDoList.describeTasksPriorityHigh(people.loki, "High", tasks);
      $(".loki-high-pri").append("<ul><li>" + priorityHighestForLoki[0] + "</li></ul>");

  });
}
