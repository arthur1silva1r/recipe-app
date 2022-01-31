import React, { useContext, useEffect } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../MyContext';
import { searchDrinks } from '../services/fetchSearch';

export default function Drinks() {
  const name = 'Drinks';
  const { setList } = useContext(MyContext);

  const renderFirstList = async () => {
    const drinksResult = await searchDrinks('name', '');
    setList(drinksResult.drinks.slice(0, +'12'));
  };

  useEffect(() => {
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
