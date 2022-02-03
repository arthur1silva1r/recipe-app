import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../MyContext';
import '../Profile.css';

export default function Profile() {
  const name = 'Profile';
  const history = useHistory();

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, [titleHandler]);

  const info = JSON.parse(localStorage.getItem('user'));

  function clearStorage() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div>
      <Header />
      <div className="user-info">
        <h3 data-testid="profile-email">{info.email}</h3>
        <div className="profile-buttons">
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/done-recipes') }
          >
            Done Recipes
          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ clearStorage }
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
