import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [hide, setHide] = useState(true);
  const { componentTitle } = useContext(MyContext);
  const pagesWithSearch = ['Foods', 'Explore Nationalities', 'Drinks'];

  return (
    <header>
      <Link to="/profile">
        <img src={ profileIcon } data-testid="profile-top-btn" alt="Profile" />
      </Link>
      <span data-testid="page-title">{ componentTitle }</span>
      {
        pagesWithSearch.includes(componentTitle)
        && (
          <button
            type="button"
            onClick={ () => setHide(!hide) }
          >
            <img data-testid="search-top-btn" src={ searchIcon } alt="Search" />
          </button>
        )
      }
      {
        !hide && <div><SearchBar /></div>
      }
    </header>

  );
}
