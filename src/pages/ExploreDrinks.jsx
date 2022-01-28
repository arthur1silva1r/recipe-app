import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import MyContext from '../MyContext';

export default function ExploreDrinks() {
  const name = 'Explore Drinks';

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
