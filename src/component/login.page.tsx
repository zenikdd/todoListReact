import React from "react"
import TextField from "@mui/material/TextField";
import './login.page.scss.css';


const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='login-page-container'>
                <div>Login</div>
                <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"/>
                <TextField
                    id="outlined-basic"
                    label="pass"
                    variant="outlined"/>
            </div>
        </div>
    )
}

export default LoginPage;
