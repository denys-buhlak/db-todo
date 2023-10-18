const createTodoItem = (label, isDone = false, isImportant = false) => {
  const id = setTimeout(new Date().getTime(), 0) - 3;

  return {
    id,
    label,
    isDone,
    isImportant,
  };
};

const todos = [
  createTodoItem('Drink Coffee', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
  createTodoItem('Make Awesome App', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
  createTodoItem('Have a lunch', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
  createTodoItem('Drink Tea', Boolean(Math.round(Math.random())), Boolean(Math.round(Math.random()))),
];
// const todos = [];

export { createTodoItem, todos };
