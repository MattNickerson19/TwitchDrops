import Header from "./Header"




export function ConnectAccounts() {

    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const handleUsernameChange = (event) => {
        setValues({...values, username: event.target.value})
    }

    const handlePasswordChange = (event) => {
        setValues({...values, password: event.target.value})
    }

    return (
        <>
        <Header></Header>
        <div className="form-container">
            <form class="connect-form">
                <h2>Please connect your Twitch Account</h2>
                <input onChange={handleUsernameChange}
                    value={values.username}
                    type="text" className="form-field"
                    placeholder="Twitch Username"
                    name="username" />
                <input onChange={handlePasswordChange}
                    value={values.username}
                    type="text" className="form-field"
                    placeholder="Twitch Username"
                    name="username" />
                <br/>
                <button type="submit" className="form-field">Connect Twitch Account</button>
            </form>
            <br /><br /><br />
            <form class="connect-form">
                <h2>Please connect your Steam Account</h2>
                <input onChange={handlePasswordChange}
                    value={values.username}
                    type="text" className="form-field"
                    placeholder="Steam Username"
                    name="username" />
                <input onChange={handlePasswordChange}
                    value={values.username}
                    type="text" className="form-field"
                    placeholder="Twitch Username"
                    name="username" />
                <br/>
                <button type="submit" className="form-field">Connect Steam Account</button>    
            </form>
        </div>
        </>

    )
}