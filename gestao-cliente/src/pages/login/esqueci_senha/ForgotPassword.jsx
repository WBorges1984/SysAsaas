import { useState } from 'react';
import style from '../style.module.css'
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
    let userData = {
      username: username
    }
    console.log('User Data:', userData);
    limparCampos();
  }
  const limparCampos = () => {
    setUsername('');
  }
  return (
    <>
      <section id="login" className={style.loginSection}>
        <div className={style.container}>
          <h1 className={style.title}>Esqueci minha senha</h1>
          <form className={style.loginForm} onSubmit={handleSubmit}>
            <div className={style.inputGroup}>
              <label htmlFor="username">Usuário/Email:</label>
              <input 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary"><span>Enviar</span></button>
            <div className={style.registerLink}>
              <Link to="/">Já tenho conta</Link>
            </div>  
          </form>
        </div>
      </section></>
  )};