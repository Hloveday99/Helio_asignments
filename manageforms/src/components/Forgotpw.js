    import React from "react";
    import Form from "react-bootstrap/Form";
    import Button from "react-bootstrap/Button";
    import {Link} from "react-router-dom";
    import {LoggedInConsumer, LoggedInContext} from "./LoggedInContext"

    const Forgotpw = (props) => {

    let [username,setUserName] = React.useState("")
    let [password,setPassword] = React.useState("")

    let {updatePass} = React.useContext(LoggedInContext)
    const usernameOnChangeHandler = (event) => {

        event.preventDefault()
        setUserName(event.target.value)
    }

    const passwordOnChangeHandler = (event) => {

        event.preventDefault()
        setPassword(event.target.value)
    }

    const submitOnClickHandler = (event) => {
        event.preventDefault()

        updatePass(username,password)
    }

    return (
        <div>
        <Form>
            <Form.Group controlId="forgotPassUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" onChange={usernameOnChangeHandler}value={username}/>
        </Form.Group>

            <Form.Group controlId="forgotPassPassword">
            <Form.Label> New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" onChange={passwordOnChangeHandler}value={password}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitOnClickHandler}>
                Submit
            </Button>

        </Form>
        <br></br>
    <Link to='/'>Home</Link>
    <LoggedInConsumer>
            {
            value => (

                value.loggedIn ?
                (
                    <h3>Logged In</h3>
                ) : (
                    <h3>Not Logged In</h3>
                )
            
                        )
          }
            </LoggedInConsumer>
    </div>
    );
    };

    export default Forgotpw;
