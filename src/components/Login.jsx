

import React from 'react'


const Login = () => {
  return (
    <div className='cont'>
         <div className='login-form'>
            <form className='form'>
                <h2>Login Form</h2>
                <label htmlFor="">UserName </label>
                <input className='text' type="text" /><br />

                <label htmlFor="">Password </label>
                <input className='pwd' type="password" />

            </form>
            <button type='submit' className='btn'>Login</button>
         </div>
    </div>
  )
}

export default Login
