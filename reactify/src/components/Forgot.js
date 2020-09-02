import React from 'react'

export default function Forgot () {

    return ( 
       <div>
       <form>
        <h1>Forgot Password?</h1>

        <label for="email" >Email</label>

        <input id="email" type="email"></input>
        <br></br> 
        <input type="submit" value="submit"></input>
        <br></br>
        <a href="./Home">home page</a>

        </form>
        </div>
    )
}