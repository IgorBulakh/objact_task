'use strict';

// ====================== Task#2 ================

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
    valeri: 105
  };
  
let max = 0;
let taskName = "";
for (const key in tasksCompleted) {
    if (max < tasksCompleted[key]) {
        max = tasksCompleted[key];
        taskName = key;
    }
}

console.log(taskName || 'no');

