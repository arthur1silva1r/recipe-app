import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../MyContext';

export default function ExploreNationalities() {
  const name = 'Explore Nationalities';

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
