const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleImportant, isDone, isImportant }) => {
  const classListImportant = isImportant ? 'fw-bold text-success' : '';
  const classListDone = isDone ? 'fw-bold text-success text-decoration-line-through' : '';

  return (
    <div
      className={`d-flex align-items-center ${classListImportant} ${classListDone}`}
      style={{ minHeight: '35px' }}
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
