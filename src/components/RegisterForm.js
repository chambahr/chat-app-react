import React from 'react'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "7df9c183-ea63-4419-9a8d-b8dc07bed742", 'User-Name': username, 'User-Secret': password }

        try {
            // get username/password => chatengine -> return messages
            await axios.get('https://api.chatengine.io/users', { headers: authObject })
            
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
        <div>
            
        </div>
    )
}

export default RegisterForm
