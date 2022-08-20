import React from 'react'

const Login = () => {
  return (
    <div className='login_container'>
        <form>
            <input 
                placeholder='Email'
                type="text"
                name="password"
            />
            <input 
                placeholder='Password'
                type="password"
                name='password'
            />
            <button 
                type='submit'>
                Login
            </button>
        </form>

    </div>
  )
}

export default Login