import { useState } from 'react';
import style from '../style.module.css'
import { Link } from 'react-router-dom';
import { validarRegistro } from '../../../Utils/validacoes.js';
export function Cadastrese() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
  event.preventDefault();


  const dadosAtuais = {
    username: username,
    email: email,
    password: password,
    passwordCheck: passwordCheck
  };

  const validacao = validarRegistro(dadosAtuais);

  if (!validacao.valido) {
    alert(validacao.erros[0]); 
    return; // Para a função aqui
  }

  let userData = {
    username: username,
    email: email,
    password: password
  };
  
  console.log('User Data:', userData);
  limparCampos();
  navegarParaLogin();
};


const navegarParaLogin = () => {
  window.location.href = '/';
}

const limparCampos = () => {
  setUsername('');
  setPassword('');
  setPasswordCheck('');
  setEmail('');

}

  return (
    <>
      <section id="login" className={style.loginSection}>
        <div className={style.container}>
          <h1 className={style.title}>Cadastro</h1>
          <form className={style.loginForm} onSubmit={handleSubmit}>
            <div className={style.inputGroup}>
              <label htmlFor="username">Usuário:</label>
              <input 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="password" >Senha:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="passwordCheck" >Confirmação de Senha:</label>
              <input 
                type="password" 
                id="passwordCheck" 
                name="passwordCheck" 
                onChange={(e) => setPasswordCheck(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary"><span>Cadastrar</span></button>
            <div className={style.registerLink}>
              <Link to="/">Já tenho conta</Link>
            </div>  
          </form>
        </div>
      </section></>
  )};