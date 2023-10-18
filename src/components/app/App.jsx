import { useState } from 'react';

import Dashboard from '../dashboard/Dashboard';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import ItemAddForm from '../item-add-form/ItemAddForm';

import './app.css';
import { todos, createTodoItem } from '../../data/todos.js';
import Footer from '../app-footer/Footer';

const App = () => {
  const [data, setData] = useState(todos);
  const [searchWord, setSearchWord] = useState('');
  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    setData(data.filter((el) => el.id !== id));
  };

  const addItem = (text) => {
    const newItem = createTodoItem(text);
    setData([...data, newItem]);
  };

  const toggleProperties = (arr, id, propName) => {
    const indexCurrentElement = arr.findIndex((el) => el.id === id);
    const oldItem = arr[indexCurrentElement];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    return [...arr.slice(0, indexCurrentElement), newItem, ...arr.slice(indexCurrentElement + 1)];
  };

  const toggleImportant = (id) => {
    setData(toggleProperties(visibleData, id, 'isImportant'));
  };

  const toggleDone = (id) => {
    setData(toggleProperties(data, id, 'isDone'));
  };

  const isDoneCount = () => {
    return data.filter((el) => el.isDone).length;
  };

  const allTodosCount = () => {
    return data.length;
  };

  const isActiveCount = () => {
    return data.filter((el) => !el.isDone).length;
  };

  const searchItems = (items, search) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };
  const filterItems = (items, filter) => {
    if (filter === 'active') {
      return items.filter((item) => !item.isDone);
    }
    if (filter === 'done') {
      return items.filter((item) => item.isDone);
    }
    return items;
  };
  const handleSearchChange = (text) => {
    setSearchWord(text);
  };

  const handleFilterClick = (text) => {
    setFilter(text);
  };

  const visibleData = filterItems(searchItems(data, searchWord), filter);

  return (
    <div
      className='mx-auto min-vh-100 d-flex flex-column'
      style={{ maxWidth: '320px' }}
    >
      <h1 className='text-center'>Todo List</h1>
      <hr className='w-100' />

      <div className='d-flex flex-column'>
        <SearchPanel onSearchChange={handleSearchChange} />
        <ItemStatusFilter
          onFilterClick={handleFilterClick}
          filter={filter}
        />
      </div>

      <hr className='w-100' />

      <Dashboard
        allTodosCount={allTodosCount()}
        isActiveCount={isActiveCount()}
        isDoneCount={isDoneCount()}
      />

      <hr className='w-100' />

      <ItemAddForm onAdded={addItem} />

      <hr className='w-100' />

      <TodoList
        todos={visibleData}
        onDeleted={deleteItem}
        onToggleDone={toggleDone}
        onToggleImportant={toggleImportant}
      />

      <hr className='w-100' />
      <Footer />
    </div>
  );
};

export default App;
