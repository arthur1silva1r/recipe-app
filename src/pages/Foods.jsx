import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import MyContext from '../MyContext';

export default function Foods() {
  const name = 'Foods';

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
