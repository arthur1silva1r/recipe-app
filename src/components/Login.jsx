import React, { useState } from 'react';
// import MyContext from '../MyContext';

function Login() {
  const INITIAL_STATE = {
    email: '',
    password: '',
  };

  // useEffect(() => {

  // }, [])

  const checkButton = (senha, email) => {
    // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const validEmail = /\S+@\S+\.\S+/.test(email);
    const minSenhaLength = 6;
    const validSenha = (senha.length > minSenhaLength);
    const check = (validEmail && validSenha);
    return !check;
  };

  const [loginState, setLoginState] = useState(INITIAL_STATE);
  const { email, password } = loginState;

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setLoginState({ ...loginState, [name]: value });
  };

  return (
    <div>
      <input
        type="email"
        id="email"
        data-testid="email-input"
        placeholder="Digite seu email..."
        value={ email }
        name="email"
        onChange={ inputHandler }
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
        value={ password }
        name="password"
        onChange={ inputHandler }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ checkButton(password, email) }
      >
        Login
      </button>
    </div>
  );
}

export default Login;
