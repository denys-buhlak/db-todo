import TodoListItem from '../todo-list-item/TodoListItem';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    const handleDeleted = () => {
      onDeleted(id);
    };
    const handleToggleDone = () => {
      onToggleDone(id);
    };
    const handleToggleImportant = () => {
      onToggleImportant(id);
    };

    return (
      <li
        key={id}
        className='list-group-item p-2'
        data-key={id}
      >
        <TodoListItem
          {...itemProps}
          onDeleted={handleDeleted}
          onToggleImportant={handleToggleImportant}
          onToggleDone={handleToggleDone}
        />
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};

export default TodoList;
