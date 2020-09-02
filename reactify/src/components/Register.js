import React from 'react'

export default function Register () {

    return(
       
        <div>
        <form>

         <h1>New Account?</h1>
 
        <label for="login" >login</label>
        <input id="email" type="email"></input>
        <br></br>
         
        <label for="password" >password</label> 
        <input id="password" type="password"></input>
        <br></br>

        <label for="vpassword">Verify password</label>
        <input id="vpassword"type="password"></input>
        <br></br>

        <input type="submit" value="submit"></input>
        <br></br>
        <a href="./Home">home page</a>
        


 
         </form>
         </div>


    )
}