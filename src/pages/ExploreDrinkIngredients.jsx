import React, { useContext, useEffect } from 'react';
import MyContext from '../MyContext';
import Header from '../components/Header';

export default function ExploreDrinkIngredients() {
  const name = 'Explore Ingredients';

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, [titleHandler]);

  return (
    <Header />
  );
}
