import { useState } from 'react';

const SearchPanel = ({ onSearchChange }) => {
  const [searchWord, setSearchWord] = useState('');
  const handleChange = (e) => {
    setSearchWord(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <input
      type='search'
      className='form-control search-input mb-3'
      placeholder='type to search'
      value={searchWord}
      onChange={handleChange}
    />
  );
};

export default SearchPanel;
