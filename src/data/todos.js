const createTodoItem = (label, isDone = false, isImportant = false) => {
  const id = setTimeout(new Date().getTime(), 0) - 3;

  return {
    id,
    label,
    isDone,
    isImportant,
  };
};

let todos = [];

import.meta.env.MODE === 'development' &&
  (todos = [
    createTodoItem('Drink Coffee', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
    createTodoItem('Make Awesome App', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
    createTodoItem('Have a lunch', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
    createTodoItem('Drink Tea', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
    createTodoItem('Call to friend', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
  ]);

export { createTodoItem, todos };
