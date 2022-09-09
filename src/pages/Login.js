import '../scss/Login.scss';
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { login } from "../stores/auth"
import users from "../data/users.json"
import { selectUser } from "../stores/auth"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://624a83dbfd7e30c51c0e7245.mockapi.io/footerAPI/users`)
          .then((response) => response.json())
          .then((actualData) => console.log(actualData))
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        const currentUser = users.find(user => user.email === email && password === password)
        if (currentUser) {
            setUser(currentUser)
            alert('giriş başarılı')
        }
        else {
            alert('kullanıcı bulunamadı')
        }
        dispatch(
            login({
                email: email,
                password: password,
                loggedIn: true
            })
        )
    }

    return (
        <div className="login">
            <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here 🚪</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submitBtn">Giriş Yap</button>
            </form>
        </div>
    )
}

export default Login