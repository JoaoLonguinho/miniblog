import styles from "./Register.module.css"

import { useState, useEffect } from "react"

const Register = () => {
  return (
    <div>
      <h1>Efetue o registro para criar seus próprios posts</h1>
      <p>Crie seu usuário e compartilhe suas experiências</p>
      <form>
        <label>
          {/* <span>Nome:</span> */}
          <input type="text" name="displayName" required placeholder="Nome de usuário"/>
        </label>
        <label>
          {/* <span>E-mail:</span> */}
          <input type="email" name="email" required placeholder="E-mail"/>
        </label>
        <label>
          {/* <span>Senha:</span> */}
          <input type="password" name="password" required placeholder="Insira sua senha"/>
        </label>
        <label>
          {/* <span>Senha:</span> */}
          <input type="password" name="confirmPassword" required placeholder="Confirme sua senha"/>
        </label>
        <button className="btn">Registrar</button>
      </form>
    </div>
  )
}

export default Register
