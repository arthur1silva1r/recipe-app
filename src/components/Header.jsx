import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [hide, setHide] = useState(true);
  const { componentTitle } = useContext(MyContext);
  return (
    <header>
      <Link to="/profile">
        <img src={ profileIcon } data-testid="profile-top-btn" alt="Profile" />
      </Link>
      <h1 data-testid="page-title">{ componentTitle }</h1>
      <button
        type="button"
        onClick={ () => setHide(!hide) }
      >
        <img data-testid="search-top-btn" src={ searchIcon } alt="Search" />
      </button>
      <div hidden={ hide }>
        <SearchBar />
      </div>
    </header>

  );
}
