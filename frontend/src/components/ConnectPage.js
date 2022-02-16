import Header from "./Header"
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




export function ConnectAccounts() {

    const [twitchValues, setTwitchValues] = useState({
        username: "",
        password: ""
    });

    const [steamValues, setSteamValues] = useState({
        username: "",
        password: ""
    });

    const handleTwitchUsernameChange = (event) => {
        setTwitchValues({...twitchValues, username: event.target.value})
    }

    const handleTwitchPasswordChange = (event) => {
        setTwitchValues({...twitchValues, password: event.target.value})
    }

    const handleSteamUsernameChange = (event) => {
        setSteamValues({...steamValues, username: event.target.value})
    }

    const handleSteamPasswordChange = (event) => {
        setSteamValues({...steamValues, password: event.target.value})
    }



    return (
        <>
        <Header></Header>
        <Form>
            <Form.Group>
                <h2>Connect to Twitch</h2>
                <Form.Label>Twitch Username</Form.Label>
                <Form.Control onChange={handleTwitchUsernameChange}
                    value={twitchValues.username}
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    autoComplete="off" />
                <Form.Label>Twitch Password</Form.Label>    
                <Form.Control onChange={handleTwitchPasswordChange}
                    value={twitchValues.password}
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    autoComplete="off" />
                <br/>
                <Button variant="outline-dark" type="submit">Connect Steam Account</Button>
            </Form.Group>
            <br /><br /><br />
            <Form.Group>
                <h2>Connect to Steam</h2>
                <Form.Label>Steam Username</Form.Label>
                <Form.Control onChange={handleSteamUsernameChange}
                    value={steamValues.username}
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    autoComplete="off" />
                <Form.Label>Steam Password</Form.Label>    
                <Form.Control onChange={handleSteamPasswordChange}
                    value={steamValues.password}
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    autoComplete="off"
                    />
                    {/*style={{width: '50%'}}*/}
                <br/>
                <Button variant="outline-dark" type="submit">Connect Steam Account</Button>    
            </Form.Group>
        </Form>

        </>

    )
}

