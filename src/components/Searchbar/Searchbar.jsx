import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ onSubmit }) => {
  const [requestValue, setRequestValue] = useState('');

  const handleRequestValueChange = evt => {
    setRequestValue(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (requestValue.trim() === '') {
      toast('Enter your request');
      return;
    }
    onSubmit(requestValue);
    setRequestValue('');
  };

  return (
    <Header className="searchbar">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <FaSearch />
        </button>

        <input
          value={requestValue}
          onChange={handleRequestValueChange}
          className="input"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </Header>
  );
};
