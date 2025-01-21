import { IUser } from "../../types/interfaces"

export const authUser = async ({email, password}:IUser) => {
    fetch(`${process.env.REACT_APP_API}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: email,
            password: password
        })
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('access_token', data.access_token)
        })
} 