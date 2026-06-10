import React, { useState } from 'react'
import './authorization.css'

const Authorization = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])
    

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name.trim()) {
            setMessage('Введите имя!')
            return
        }

        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name })
            })

            const data = await response.json()
            setName('')
            fetchUsers()
        } catch (error) {
            setMessage('Ошибка соединения с сервером')
        }
    }

   
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/users')
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            setMessage('Ошибка загрузки пользователей')
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <p className='enterName'>Enter your name</p>
                <input
                    type="text"
                    className="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            <ul>
                {users.map(user => (
                    <li key={user.id}>ID: {user.id} — {user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Authorization