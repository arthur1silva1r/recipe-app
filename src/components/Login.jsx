import React, { useContext } from 'react';
import MyContext from '../MyContext';

function Login() {
  const context = useContext(MyContext);
  console.log(context);

  return (
    <div>
      <h2>Login Page</h2>
    </div>
  );
}

export default Login;
