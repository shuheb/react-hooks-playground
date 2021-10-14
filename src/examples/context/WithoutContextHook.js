import { useState, } from "react";


const WithoutContextHookComponent = (props) => {
    const [user, setUser] = useState({
        firstName: "Shuheb",
        lastName: "Ahmed",
        authenticated: false,
        email: "shuheb@example.com"
    });

    return (
        <div className="component-item">
            <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
            <h1>Without useContext</h1>
            <h1>{`first level - Is ${user.firstName} logged in: ${user.authenticated}`}</h1>
            <LevelTwo user={user} setAuthentication={(auth) => setUser({ ...user, authenticated: auth })} />
        </div>
    );
};

const LevelTwo = (props) => (
    <div>
        <h2>second level</h2>
        <LevelThree user={props.user} setAuthentication={props.setAuthentication} />

    </div>);

const LevelThree = (props) => (
    <div>
        <span>
            <h3>third level</h3>
            <p>props -> {JSON.stringify(props)}</p>
        </span>
        <LevelFour user={props.user} setAuthentication={props.setAuthentication} />
    </div>);

const LevelFour = (props) => (
    <div>
        <h4>fourth level</h4>
        <LevelFive user={props.user} setAuthentication={props.setAuthentication} />
    </div>);

const LevelFive = (props) => {
    return (
        <div>
            <h5>{`fifth level - Is ${props.user.firstName} logged in: ${props.user.authenticated}`}</h5>
            <button
                onClick={() => {
                    props.setAuthentication(!props.user.authenticated)
                }}
            >
                {props.user.authenticated ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
};

export default WithoutContextHookComponent;
