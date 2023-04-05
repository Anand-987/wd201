/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    //l=[]
    //for (let i = 0; i<all.length;i++){
    //    l.push(all.filter(all => all[i].dueDate = yesterday))
    //}
    return all.filter((all) => all.dueDate === yesterday);
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    return all.filter((all) => all.dueDate === today);
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    return all.filter((all) => all.dueDate === tomorrow);
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    let str = "";
    j = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].completed == false && list[i].dueDate != today) {
        if (i == list.length - 1) {
          str += "[ ] " + list[i].title + " " + list[i].dueDate;
        } else {
          str += "[ ] " + list[i].title + " " + list[i].dueDate + "\n";
        }
      } else if (list[i].completed == true && list[i].dueDate == today) {
        if (i == list.length - 1) {
          str += "[x] " + list[i].title + " ";
        } else {
          str += "[x] " + list[i].title + "\n";
        }
      } else if (list[i].completed == false && list[i].dueDate == today) {
        if (i == list.length - 1) {
          str += "[ ] " + list[i].title + " ";
        } else {
          str += "[ ] " + list[i].title + "\n";
        }
      }
    }
    return str;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
