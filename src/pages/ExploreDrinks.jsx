import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../MyContext';

export default function ExploreDrinks() {
  const name = 'Explore Drinks';

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, [titleHandler]);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
