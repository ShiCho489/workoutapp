import { useState } from 'react'


const Signup =() => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleSubmit = async (e) => {
         e.preventDefault()

         console.log(email, password);
    };

    return (

        <form className= "signup" onSubmit={handleSubmit}>

            <h3>Sign up</h3>
            <label>Email:</label>
            <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}></input>

           <label>Password:</label>
            <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}></input>
            <button>Signup</button>
        </form>
    )
}

export default Signup