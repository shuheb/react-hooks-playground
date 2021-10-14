import { useState, useContext, createContext } from "react";

const UserContext = createContext([
    {
        firstName: "Bob",
        lastName: "Bobberson",
        suffix: 1,
        authenticated: true,
        email: "bobbobberson@example.com"
    },
    (obj) => obj
]);

const WithContextHookComponent = () => {
    const [user, setUser] = useState({
        firstName: "Shuheb",
        lastName: "Ahmed",
        authenticated: false,
        email: "shuheb@example.com"
    });

    return (
        <UserContext.Provider value={[user, (auth) => setUser({ ...user, authenticated: auth })]}>
            <div className="component-item">
                <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
                <h1>useContext</h1>

                <h1>{`first level - Is ${user.firstName} logged in: ${user.authenticated}`}</h1>
                <LevelTwo />
            </div>
        </UserContext.Provider>
    );
};



const LevelTwo = () => (
    <div>
        <h2>second level</h2>
        <LevelThree />
    </div>
);

const LevelThree = () => (
    <div>
        <h3>third level</h3>
        <LevelFour />
    </div>
);

const LevelFour = () => (
    <div>
        <h4>fourth level</h4>
        <LevelFive />
    </div>
);

const LevelFive = () => {
    const [user, setAuthentication] = useContext(UserContext);
    return (
        <div>
            <h5>{`fifth level - Is ${user.firstName} logged in: ${user.authenticated}`}</h5>
            <button onClick={() => setAuthentication(!user.authenticated)}>
                {user.authenticated ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
}


export default WithContextHookComponent;
