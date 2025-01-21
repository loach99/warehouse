export const authUser = async (email: string, password: string) => {
    fetch('https://hcateringback-dev.unitbeandev.com/api/auth/login', {
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