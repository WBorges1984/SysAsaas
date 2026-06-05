import style from './style.module.css'

export function Login() {
  return (
    <>
      <section id="login" className={style.loginSection}>
        <div className={style.container}>
          <h1 className={style.title}>Login</h1>
          <form className={style.loginForm}>
            <div className={style.inputGroup}>
              <label htmlFor="username">Usuário:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="password" >Senha:</label>
              <input for="floatingInputInvalid" type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary"><span>Login</span></button>
            <div className={style.registerLink}>
              <a href="/register">Cadastre-se</a>
              <a href="/forgot-password">Esqueci minha senha</a>
            </div>  
          </form>
        </div>
      </section></>
  )};