import React, { useContext, useEffect } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import MyContext from '../MyContext';

export default function Drinks() {
  const name = 'Drinks';

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, [titleHandler]);

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}
