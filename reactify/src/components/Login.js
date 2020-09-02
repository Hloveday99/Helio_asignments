import React from 'react'

export default function Login () {

    return (
 
            <div>
            <form>

             <h1>Login page</h1>
     
             <label for="login" >login</label>
     
             <input id="email" type="email"></input>
             <br></br>
             
             <label for="password" >password</label> 

             <input id="password" type="password"></input>
             <br></br>
             <input type="submit" value="submit"></input>

             <a href="./Home">home page</a>

     
             </form>
             </div>
    )      
}