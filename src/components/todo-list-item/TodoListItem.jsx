const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleImportant, isDone, isImportant }) => {
  const classListImportant = isImportant ? 'font-weight-bold text-success' : '';
  const inlineStyle = { textDecoration: isDone ? 'line-through' : 'none', minHeight: '35px' };

  return (
    <div
      className={`d-flex align-items-center ${classListImportant}`}
      style={inlineStyle}
    >
      <span
        className='mr-auto w-100'
        onClick={onToggleDone}
      >
        {label}
      </span>

      <button
        type='button'
        className='btn btn-outline-success btn-sm w-25 mx-1'
        style={{ maxWidth: '35px' }}
        onClick={onToggleImportant}
      >
        <i className='fa fa-exclamation' />
      </button>

      <button
        type='button'
        className='btn btn-outline-danger btn-sm w-25 mx-1'
        style={{ maxWidth: '35px' }}
        onClick={onDeleted}
      >
        <i className='fa fa-trash' />
      </button>
    </div>
  );
};

export default TodoListItem;
