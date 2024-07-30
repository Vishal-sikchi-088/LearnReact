import { useState } from "react"
import {LOGO_URL} from "./utils/constant"
const Header = () => {
    const [loginValue,setLoginValue] = useState("Login")
    const login = () =>{
        loginValue === 'Login' ? setLoginValue('Logout') : setLoginValue('Login')
    }
    return (
        <div className="header ">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-title">
                <h1>Namaste FooD</h1>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={login}>{loginValue}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header