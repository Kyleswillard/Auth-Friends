import React, { useState } from 'react'

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        e.preventDefault()
        setCredentials({ [e.target.name]: e.target.value })
        console.log(credentials)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div
            className="ui input container"
            style={{
                width: '80vw',
                display: 'flex',
                justifyContent: 'space-around'
            }}
        >
            <form onSubmit={handleSubmit}>
                <label className="ui label" htmlFor="username">
                    Username:
                </label>
                <input
                    name="username"
                    id="username"
                    type="text"
                    onChange={handleChange}
                    placeholder="UserName"
                    value={credentials.username}
                />

                <label className="ui label" htmlFor="password">
                    Password:
                </label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="password"
                    value={credentials.password}
                />

                <button className="ui button">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage
