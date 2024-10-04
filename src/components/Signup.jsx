import React from "react";
import './Signup.css'



const Signup = () => {
  return (
    <div className='container1'>
         <div className='login-form1'>
            <form className='form1'>
                <h2>SignUp Form</h2>
                <label htmlFor="">UserName </label>
                <input className='text' type="text" /><br />
                

                <label htmlFor="">Password </label>
                <input className='pwd1' type="password" /><br />
                <label htmlFor="">Confirm Password</label>
                <input type="text" />

            </form>
            <button type='submit' className='btn1'>SignUp</button>
         </div>
    </div>
  )
}

export default Signup
