/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  var diane: IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: IPerson = {
    name:"God of mischief",
    email: "loki@geocities.com",
    phone: "555-666-7777"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki
  };
}
