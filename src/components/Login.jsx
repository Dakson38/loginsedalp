import React, { useState } from 'react'
import './styles/Login.css'

import imgSedalp from '../assets/images/sedalp.png'

//const usuario = document.getElementById('usuario');
//const password = document.getElementById('password');



const Login = () => {
  return (
    <div className='login'>
      <div className='img-Login'>
        <img src={imgSedalp} alt="" />
      </div>
      <form action="" method="post" className='formulario-Login'>
        <label>Usuario</label>
        <input type="text" name="" id="usuario" />
        <label>Contraseña</label>
        <input type="password" name="" id="password"/>
        <input type="submit" value="Ingresar" className='boton-Ingresar'/>
      </form>
    </div>
  )
}


export default Login