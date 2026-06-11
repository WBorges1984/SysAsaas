import { useState } from 'react';
import style from './style.module.css'
import { Link } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState('willian.borges@hotmail.com.br');
  const [password, setPassword] = useState('123456');

    
  function navegarParaDashboard() {
    window.location.href = '/dashboard';
  }
    const limparCampos = () => {
    setUsername('');
    setPassword('');
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
    let userData = {
      username: username,
      password: password
    }
    console.log('User Data:', userData);
    limparCampos();
    navegarParaDashboard()
  }
 
  return (
    <>
      <section id="login" className={style.loginSection}>
        <div className={style.container}>
          <h1 className={style.title}>Login</h1>
          <form className={style.loginForm} onSubmit={handleSubmit}>
            <div className={style.inputGroup}>
              <label htmlFor="username">Usuário:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="password" >Senha:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary"><span>Login</span></button>
            <div className={style.registerLink}>
              <Link to="/cadastrese">Cadastre-se</Link>
              <Link to="/forgot-password">Esqueci minha senha</Link>
            </div>  
          </form>
        </div>
      </section></>
  )};