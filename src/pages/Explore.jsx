import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';

export default function Explore() {
  const name = 'Explore';

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, []);

  return (
    <div>
      <Header title="Explore" enableSearch={ false } />
    </div>
  );
}
