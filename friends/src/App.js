import React from 'react'
import { Switch, Link, Route, Redirect } from 'react-router-dom'

import Login from './components/login.component'

function App() {
    return (
        <div className="ui link list">
            <nav>
                <ul
                    style={{
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}
                >
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/friends">Friends</Link>
                    </li>
                    <li className="item">
                        <Link to="/edit">Edit Friend</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <PrivateRoute path="/friends"></PrivateRoute>
                <Route path="/edit"></Route>
            </Switch>
        </div>
    )
}
const useAuth = () => {}

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default App
