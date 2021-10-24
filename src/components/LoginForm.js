import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "7df9c183-ea63-4419-9a8d-b8dc07bed742", 'User-Name': username, 'User-Secret': password }

        try {
            // get username/password => chatengine -> return messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            
            // onsuccess
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();
        } catch (error) {
            // error -> try with new login details
            setError('Oops, incorrect Credentials.')
        }
    }


    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text' 
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    className='input'
                    placeholder='Username' required
                    />

                    <input 
                    type='password' 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    className='input'
                    placeholder='Password' required
                    />

                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Star Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
