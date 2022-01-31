import React, { useContext, useEffect } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../MyContext';
import { searchFoods } from '../services/fetchSearch';

export default function Foods() {
  const { setList } = useContext(MyContext);
  const name = 'Foods';

  const renderFirstList = async () => {
    const foodResults = await searchFoods('name', '');
    setList(foodResults.meals.slice(0, +'12'));
  };

  useEffect(() => {
    console.log('ola');
    renderFirstList();
  }, []);

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, [titleHandler]);

  return (
    <div>
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}
