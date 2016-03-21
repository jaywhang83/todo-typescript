var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description + " " + task.priority);
            }
        }
        return descriptions;
    };
    ToDoList.describeTasksForType = function (taskType, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if (task.constructor.name === taskType) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.describeTasksForPriority = function (taskPriority, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (task.priority === taskPriority) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.describeTasksPriorityHigh = function (assignee, taskPriority, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_4 = taskCollection; _i < taskCollection_4.length; _i++) {
            var task = taskCollection_4[_i];
            if (task.assignedTo === assignee && task.priority === taskPriority) {
                descriptions.push(task.description + " " + task.priority);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High", people.loki));
tasks[0].markDone();
tasks.push(new ToDoList.HobbyTask("practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
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
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
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
for (var _a = 0, typeHomeTasks_1 = typeHomeTasks; _a < typeHomeTasks_1.length; _a++) {
    var task = typeHomeTasks_1[_a];
    console.log(task);
}
var typeHobbyTasks = ToDoList.describeTasksForType("HobbyTask", tasks);
console.log(typeHobbyTasks);
console.log("Here are the tasks for HobbyTask");
for (var _b = 0, typeHobbyTasks_1 = typeHobbyTasks; _b < typeHobbyTasks_1.length; _b++) {
    var task = typeHobbyTasks_1[_b];
    console.log(task);
}
var typeWorkTasks = ToDoList.describeTasksForType("WorkTask", tasks);
console.log(typeWorkTasks);
console.log("Here are the tasks for WorkTask");
for (var _c = 0, typeWorkTasks_1 = typeWorkTasks; _c < typeWorkTasks_1.length; _c++) {
    var task = typeWorkTasks_1[_c];
    console.log(task);
}
var priorityHigh = ToDoList.describeTasksForPriority("High", tasks);
console.log("Here are tasks with a High priority:");
for (var _d = 0, priorityHigh_1 = priorityHigh; _d < priorityHigh_1.length; _d++) {
    var task = priorityHigh_1[_d];
    console.log(task);
}
var priorityMedium = ToDoList.describeTasksForPriority("Medium", tasks);
console.log("Here are tasks with a Medium priority:");
for (var _e = 0, priorityMedium_1 = priorityMedium; _e < priorityMedium_1.length; _e++) {
    var task = priorityMedium_1[_e];
    console.log(task);
}
var priorityLow = ToDoList.describeTasksForPriority("Low", tasks);
console.log("Here are tasks with a Low priority:");
for (var _f = 0, priorityLow_1 = priorityLow; _f < priorityLow_1.length; _f++) {
    var task = priorityLow_1[_f];
    console.log(task);
}
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-create-tasks.ts" />
var ToDoList;
(function (ToDoList) {
    $(document).ready(function () {
        var thorTasks = ToDoList.describeTasksForPerson(ToDoList.people.thor, tasks);
        for (var _i = 0, thorTasks_2 = thorTasks; _i < thorTasks_2.length; _i++) {
            var task = thorTasks_2[_i];
            $(".thor").append("<ul><li>" + task + "</li></ul>");
        }
        var priorityHighestForThor = ToDoList.describeTasksPriorityHigh(ToDoList.people.thor, "High", tasks);
        $(".thor-high-pri").append("<ul><li>" + priorityHighestForThor[0] + "</li></ul>");
        var priorityHighestForDiane = ToDoList.describeTasksPriorityHigh(ToDoList.people.diane, "High", tasks);
        $(".diane-high-pri").append("<ul><li>" + priorityHighestForDiane[0] + "</li></ul>");
        var priorityHighestForLoki = ToDoList.describeTasksPriorityHigh(ToDoList.people.loki, "High", tasks);
        $(".loki-high-pri").append("<ul><li>" + priorityHighestForLoki[0] + "</li></ul>");
    });
})(ToDoList || (ToDoList = {}));
