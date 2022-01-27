import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import MyContext from '../MyContext';

export default function Profile() {
  const name = 'Profile';

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, []);

  return (
    <Header />
  );
}
