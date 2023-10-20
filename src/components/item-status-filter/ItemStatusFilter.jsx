const ItemStatusFilter = ({ filter, onFilterClick }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
    { name: 'important', label: 'Important' },
  ];
  const handleFilterClick = (e) => {
    onFilterClick(e.target.name);
  };

  const renderButtons = buttons.map(({ name, label }) => {
    return (
      <button
        type='button'
        key={name}
        name={name}
        className={filter === name ? 'btn btn-info' : 'btn btn-outline-secondary'}
        onClick={handleFilterClick}
      >
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{renderButtons}</div>;
};

export default ItemStatusFilter;
